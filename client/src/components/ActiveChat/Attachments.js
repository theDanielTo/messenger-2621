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
  image: {
    height: 150,
    borderRadius: 5,
    margin: 4
  }
}));

const Attachments = (props) => {
  const classes = useStyles();
  const { key, attachments } = props;

  return (
    <Box className={classes.root}>
      {attachments.map((attachment) => {
        return (
          <img key={key} src={attachment} alt={`attachment-${key}`} className={classes.image} />
        );
      })}
    </Box>
  );
}

export default Attachments;
