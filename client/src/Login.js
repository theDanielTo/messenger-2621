import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    width: "100%"
  },
  heroImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "40%",
    background: "left/contain no-repeat url('./assets/bg-img.png')",
    color: "white"
  },
  form: {
    height: "100%",
  }
}));

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.root}>
      <Box className={classes.heroImage}>
        <img
          src="./assets/bubble.svg"
          alt="bubble"/>
        <Typography>Converse with anyone with any language</Typography>
      </Box>
      <Box className={classes.form}>
        <Grid container item>
          <Typography>Need to register?</Typography>
          <Button onClick={() => history.push("/register")}>Register</Button>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Button type="submit" variant="contained" size="large">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
