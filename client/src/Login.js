import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { SideBanner, RedirectLink } from "./components/Authentication/index";
import { login } from "./store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%"
  },
  mainSection: {
    height: "100%"
  },
  formContainer: {
    width: "70%",
    height: "50%"
  }
}));

const Login = (props) => {
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
      <SideBanner />
      <Grid container item
        sm={7}
        className={classes.mainSection}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <RedirectLink
          route="/register"
          routeText="Don't have an account?"
          buttonText="Create account" />
        <form onSubmit={handleLogin} className={classes.formContainer}>
          <Grid container>
            <Grid item>
              <Typography variant="h2">
                Welcome back!
              </Typography>
            </Grid>
            <Grid item>
              <FormControl marginNormal fullWidth required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl marginNormal fullWidth required>
                <TextField
                  aria-label="password"
                  label="Password"
                  name="password"
                  type="password"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
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
