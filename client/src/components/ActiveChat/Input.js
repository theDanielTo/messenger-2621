import React, { useState } from "react";
import axios from "axios";
import { FormControl, FilledInput, InputLabel, InputAdornment, Typography } from "@material-ui/core";
import AttachmentIcon from '@material-ui/icons/Attachment';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";

const CLOUDINARY_API = "https://lfz-cors.herokuapp.com/?url=https://api.cloudinary.com/v1_1/dto1989/image/upload";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20
  },
  attachmentIcon: {
    fontSize: "2rem",
    float: "right",
    cursor: "pointer",
    "&:hover": {
      color: "#333"
    }
  },
  fileInput: {
    display: "none"
  },
  fileSelectDialog: {
    fontSize: "0.8rem",
    color: theme.palette.secondary,
    lineHeight: "2rem",
    marginRight: "2.5rem"
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleFileSelect = async (event) => {
    const promises = [];

    for (const file of event.target.files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "p78baqe2");
      promises.push(axios.post(CLOUDINARY_API, formData));
    }

    await Promise.all(promises)
      .then(responses => {
        setFiles(() => [...responses])
      })
  }

  const handleMessageChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const attachmentUrls = files.map(file => {
      return file.data.url;
    })

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachmentUrls.length > 0 ? attachmentUrls : null
    };
    await postMessage(reqBody);
    setText("");
    setFiles([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleMessageChange}
          endAdornment={
            <InputAdornment position="end">
              <InputLabel htmlFor="attachment">
                <AttachmentIcon color="secondary" className={classes.attachmentIcon} />
                <input
                  type="file"
                  name="attachment"
                  id="attachment"
                  multiple
                  className={classes.fileInput}
                  onChange={handleFileSelect}
                />
                <Typography className={classes.fileSelectDialog}>
                  {files.length > 0 ? (
                    `${files.length} file(s) selected`
                  ) : (
                    ""
                  )}
                </Typography>
              </InputLabel>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
