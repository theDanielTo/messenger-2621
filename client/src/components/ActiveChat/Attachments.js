import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: "50vw",
    overflowX: "auto"
  },
  image: {
    borderRadius: 10,
    height: (props) =>
      props.attachments.length > 1
        ? 100
        : 150,
    margin: (props) =>
      props.attachments.length > 1
        ? 4
        : 0
  }
}));

const Attachments = (props) => {
  const classes = useStyles(props);
  const { attachments } = props;

  return (
    <Box className={classes.root}>
      {attachments.map((attachment, index) => {
        return (
          <img key={`${attachment}-${index}`}
            src={attachment}
            alt={`attachment-${index}`}
            className={classes.image}
          />
        )
      })}
    </Box>
  );
}

export default Attachments;
