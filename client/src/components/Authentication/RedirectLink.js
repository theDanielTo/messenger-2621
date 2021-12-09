import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    position: "absolute",
    top: 0,
    right: 0,
    padding: theme.spacing(5),
    '@media (max-width:700px)': {
      width: "80%",
      padding: theme.spacing(2),
      justifyContent: "flex-end"
    }
  },
  routeText: {
    lineHeight: "4rem",
    marginRight: theme.spacing(5),
    '@media (max-width:820px)': {
      marginRight: theme.spacing(2)
    }
  },
  routeBtn: {
    padding: "1rem 3rem",
    boxShadow: "0 0 0.7rem rgba(178, 178, 178, 0.4)",
    '@media (max-width:820px)': {
      padding: theme.spacing(2, 4)
    }
  },
}));

const RedirectLink = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { route } = props;

  return (
    <Grid container className={classes.root}>
      <Typography color="secondary" className={classes.routeText}>
        {props.routeText}
      </Typography>
      <Button
        onClick={() => history.push(route)}
        color="primary"
        className={classes.routeBtn}
      >
        {props.buttonText}
      </Button>
    </Grid>
  );
}

export default RedirectLink;
