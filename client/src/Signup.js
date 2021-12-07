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
import { SideBanner } from "./components/Authentication/index";
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
  loginRoute: {
    width: "auto",
    position: "absolute",
    top: 0,
    right: 0,
    padding: "3rem",
    '@media (max-width:600px)': {
      width: "80%",
      padding: "0.5rem",
      justifyContent: "flex-end"
    }
  },
  routeText: {
    lineHeight: "4rem",
    marginRight: "3rem",
    '@media (max-width:820px)': {
      fontSize: 14,
      marginRight: "1rem"
    }
  },
  loginBtn: {
    padding: "1rem 3rem",
    boxShadow: "0 0 1rem 0.2rem rgba(58, 141, 255, 0.2)",
    '@media (max-width:820px)': {
      padding: "1rem 2rem"
    }
  },
  formContainer: {
    width: "70%",
    height: "50%"
  },
  formHeader: {
    textAlign: "left",
    fontWeight: "bold"
  },
  formElement: {
    width: "100%",
    marginBottom: "1.5rem",
    textAlign: "center"
  },
  formInput: {
    width: "100%"
  },
  createBtn: {
    padding: "1rem 4rem"
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
    <Grid container
      className={classes.root}
    >
      <SideBanner />

      <Grid container item
        sm={7}
        className={classes.mainScreen}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container className={classes.loginRoute}>
          <Typography color="secondary" className={classes.routeText}>
            Already have an account?
          </Typography>
          <Button
            onClick={() => history.push("/login")}
            color="primary"
            className={classes.loginBtn}
          >
            Login
          </Button>
        </Grid>
        <form onSubmit={handleRegister} className={classes.formContainer}>
          <Grid container>
            <Grid item className={classes.formElement}>
              <Typography variant="h5" className={classes.formHeader}>
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
