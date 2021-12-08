import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end"
  },
  otherRoot: {
    justifyContent: "flex-start"
  },
  image: {
    height: 150,
    borderRadius: 5,
    margin: 4
  }
}));

const Attachments = (props) => {
  const classes = useStyles();
  const { key, attachments, isOther } = props;

  return isOther ? (
    <Box className={`${classes.root} ${classes.otherRoot}`}>
      {attachments.map((attachment) => {
        return (
          <img key={key} src={attachment} alt={`attachment-${key}`} className={classes.image} />
        );
      })}
    </Box>
  ) : (
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
