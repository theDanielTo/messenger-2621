import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 200,
    maxWidth: "50vw",
    overflow: "auto"
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
    <Grid container
      justifyContent="flex-end"
      className={classes.root}
    >
      {attachments.map((attachment) => {
        return (
          <Grid>
            <img key={attachment}
              src={attachment}
              alt={`attachment-${attachment}`}
              className={classes.image}
            />
          </Grid>
        )
      })}
    </Grid>
  );
}

export default Attachments;
