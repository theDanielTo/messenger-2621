import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "40%",
    background: "linear-gradient(to top, rgba(58, 141, 255, .10), rgba(58, 141, 255, .90)), url('./assets/bg-img.png') center/cover no-repeat",
    color: "#FFF"
  },
  bannerText: {
    height: "100%"
  },
  bannerIcon: {
    marginBottom: "2rem"
  }
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{ display: { xs: "none", sm: "block" } }}
      className={classes.root}
    >
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.bannerText}
      >
        <Grid item className={classes.bannerIcon}>
          <img src="./assets/bubble.svg" alt="bubble" />
        </Grid>
        <Grid item>
          <Typography variant="h5" align="center">
            Converse with anyone
          </Typography>
          <Typography variant="h5" align="center">
            with any language
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SideBanner;
