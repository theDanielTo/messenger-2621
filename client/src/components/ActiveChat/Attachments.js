import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {

  }
}));

const Attachments = (props) => {
  const classes = useStyles();
  const { key, attachments } = props;

  return (
    <Box className={classes.root}>
      {
        attachments.map((attachment) => {
          return (
            <img key={key} src={attachment} alt={`attachment ${key}`} />
          );
        })
      }
    </Box>
  );
}

export default Attachments;