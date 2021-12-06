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
import { login } from "./store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    width: "100%"
  },
  bannerImage: {
    height: "100%",
    background: "linear-gradient(to top, rgba(58, 141, 255, .80), rgba(58, 141, 255, .80)), url('./assets/bg-img.png') center/cover no-repeat",
    color: "white"
  },
  bannerIcon: {
    height: "100%",
    transform: "translateY(-100%)",
    '@media (max-width:600px)': {
      height: "50%",
      transform: "translateY(-50%)"
    }
  },
  bannerText: {
    padding: '0 8rem',
    '@media (max-width:600px)': {
      fontSize: 18,
      padding: '0 1rem'
    }
  },
  mainScreen: {
    height: "100%",
    padding: 10
  },
  signupRoute: {
    width: "auto",
    position: "absolute",
    top: 0,
    right: 0,
    padding: "4rem",
    '@media (max-width:600px)': {
      width: "50%",
      padding: "0.5rem",
      justifyContent: "flex-end"
    }
  },
  routeText: {
    lineHeight: "2rem",
    marginRight: "4rem",
    '@media (max-width:600px)': {
      fontSize: 14,
      marginRight: "0"
    }
  },
  formContainer: {
    width: "50%",
    height: "50%",
    '@media (max-width:600px)': {
      width: "100%"
    }
  },
  formHeader: {
    textAlign: "left",
    '@media (max-width:600px)': {
      fontSize: "1.5em"
    }
  },
  formElement: {
    width: "100%",
    marginBottom: "2.5rem",
    textAlign: "center"
  },
  formInput: {
    width: "100%"
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
    <Grid container
      className={classes.root}
    >
      <Grid container item
        xs={6} md={5}
        className={classes.bannerImage}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img className={classes.bannerIcon}
            src="./assets/bubble.svg"
            alt="bubble"
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            className={classes.bannerText}
          >
            Converse with anyone
          </Typography>
          <Typography
            variant="h4"
            align="center"
            className={classes.bannerText}
          >
            with any language
          </Typography>
        </Grid>
      </Grid>

      <Grid container item
        xs={6} md={7}
        className={classes.mainScreen}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container
          className={classes.signupRoute}
        >
          <Typography
            color="secondary"
            className={classes.routeText}
          >
            Don't have an account?
          </Typography>
          <Button
            onClick={() => history.push("/register")}
            color="primary"
          >
            Create account
          </Button>
        </Grid>
        <form
          onSubmit={handleLogin}
          className={classes.formContainer}
        >
          <Grid container>
            <Grid item
              className={classes.formElement}
            >
              <Typography
                variant="h3"
                className={classes.formHeader}
              >
                Welcome back!
              </Typography>
            </Grid>
            <Grid item
              className={classes.formElement}
            >
              <FormControl
                margin="normal"
                required
                className={classes.formInput}
              >
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item
              className={classes.formElement}
            >
              <FormControl
                margin="normal"
                required
                className={classes.formInput}
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  name="password"
                  type="password"
                />
              </FormControl>
            </Grid>
            <Grid item
              className={classes.formElement}
            >
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
