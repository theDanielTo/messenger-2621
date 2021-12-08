import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "40%",
    background: "url('./assets/bg-img.png') center/cover no-repeat",
    color: "#FFF"
  },
  gradient: {
    height: "100%",
    background: "linear-gradient(rgba(58, 141, 255, 0.85) 50%, rgba(58, 141, 255, 0.3))"
  },
  bannerText: {
    height: "100%",
    transform: "translateY(-10%)"
  },
  bannerIcon: {
    marginBottom: theme.spacing(4)
  }
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{ display: { xs: "none", sm: "block" } }}
      className={classes.root}
    >
      <Box className={classes.gradient}>
        <Grid container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.bannerText}
        >
          <Box className={classes.bannerIcon}>
            <img src="./assets/bubble.svg" alt="bubble" />
          </Box>
          <Box>
            <Typography variant="h5" align="center">
              Converse with anyone
            </Typography>
            <Typography variant="h5" align="center">
              with any language
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default SideBanner;
