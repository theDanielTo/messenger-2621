import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
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
  mainScreen: {
    height: "100%",
    width: "100%"
  },
  formContainer: {
    width: "70%",
    height: "50%"
  },
  formHeader: {
    textAlign: "left"
  },
  formElement: {
    width: "100%",
    marginBottom: theme.spacing(4),
    textAlign: "center"
  },
  formInput: {
    width: "100%"
  },
  loginBtn: {
    padding: theme.spacing(2, 8)
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
      <SideBanner />

      <Grid container item
        sm={7}
        className={classes.mainScreen}
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
            <Grid item className={classes.formElement}>
              <Typography variant="h2" className={classes.formHeader}>
                Welcome back!
              </Typography>
            </Grid>
            <Grid item className={classes.formElement}>
              <FormControl margin="normal" required className={classes.formInput}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item className={classes.formElement}>
              <FormControl margin="normal" required className={classes.formInput}>
                <TextField
                  aria-label="password"
                  label="Password"
                  name="password"
                  type="password"
                />
              </FormControl>
            </Grid>
            <Grid item className={classes.formElement}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                className={classes.loginBtn}
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
