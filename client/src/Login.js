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
    height: "150%",
    transform: "translateY(-100%)",
    '@media (max-width:600px)': {
      height: "80%"
    }
  },
  bannerText: {
    padding: '0 8rem',
    '@media (max-width:600px)': {
      fontSize: 18,
      padding: '0 1rem'
    }
  },
  form: {
    // height: "100%"
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
      <Grid
        container item
        xs={6} md={4}
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
          <Typography variant="h4" align="center" className={classes.bannerText}>
            Converse with anyone with any language
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={6} md={8}>
        <Grid className={classes.form}>
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
              <Grid>
                <FormControl margin="normal" required>
                  <TextField
                    label="password"
                    aria-label="password"
                    type="password"
                    name="password"
                  />
                </FormControl>
              </Grid>
              <Grid>
                <Button type="submit" variant="contained" size="large">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
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
