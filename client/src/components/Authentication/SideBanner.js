import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    width: "100%"
  },
  bannerImage: {
    height: "100%",
    background: "linear-gradient(to top, rgba(58, 141, 255, .10), rgba(58, 141, 255, .90)), url('./assets/bg-img.png') center/cover no-repeat",
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
    padding: '0',
    '@media (max-width:600px)': {
      fontSize: 18,
      padding: '0 1rem'
    }
  }
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Box container item
      component={Grid}
      sx={{
        '@media (max-width:600px)': {
          display: "none"
        }
      }}
      sm={4} md={5}
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
          variant="h5"
          align="center"
          className={classes.bannerText}
        >
          Converse with anyone
        </Typography>
        <Typography
          variant="h5"
          align="center"
          className={classes.bannerText}
        >
          with any language
        </Typography>
      </Grid>
    </Box>
  );
}

export default SideBanner;
