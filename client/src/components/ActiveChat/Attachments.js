import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50vw",
    display: "flex",
    justifyContent: "flex-start",
    overflowX: "auto"
  },
  singleImage: {
    height: 150,
    borderRadius: 10
  },
  multipleImage: {
    height: 100,
    borderRadius: 10,
    margin: 4
  }
}));

const Attachments = (props) => {
  const classes = useStyles();
  const { attachments } = props;

  return (
    <Box className={classes.root}>
      {attachments.length > 1 ? (
        attachments.map((attachment) => {
          return (
            <img key={attachment} src={attachment} alt={`attachment-${attachment}`} className={classes.multipleImage} />
          );
        })
      ) : (
        <img src={attachments[0]} alt={`attachment-${attachments[0]}`} className={classes.singleImage} />
      )}
    </Box>
  );
}

export default Attachments;
