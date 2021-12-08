import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { SideBanner, RedirectLink } from "./components/Authentication/index";
import { register } from "./store/utils/thunkCreators";

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
    marginBottom: theme.spacing(3),
    textAlign: "center"
  },
  formInput: {
    width: "100%"
  },
  createBtn: {
    padding: theme.spacing(2, 8)
  }
}));

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
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
          route="/login"
          routeText="Already have an account?"
          buttonText="Login" />
        <form onSubmit={handleRegister} className={classes.formContainer}>
          <Grid container>
            <Grid item className={classes.formElement}>
              <Typography variant="h2" className={classes.formHeader}>
                Create an account.
              </Typography>
            </Grid>
            <Grid item className={classes.formElement}>
              <FormControl margin="normal" required className={classes.formInput}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item className={classes.formElement}>
              <FormControl className={classes.formInput}>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item className={classes.formElement}>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                className={classes.formInput}
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item className={classes.formElement}>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                className={classes.formInput}
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item className={classes.formElement}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                className={classes.createBtn}
              >
                Create
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
