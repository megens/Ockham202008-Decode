import React from "react";
import { Link } from "react-router-dom";
//import Lottie from "react-lottie"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonArrow from "../components/ui/ButtonArrow";
import CallToAction from "./ui/CallToAction.js"; // NOTE THIS IS CALL3!!!!

//import logo from "../assets/logo.svg"; // why does this not work?????

const useStyles = makeStyles((theme) => ({
  mainContainer: { marginTop: "5em" },
}));

export default function Reserving() {
  const classes = useStyles();
  const theme = useTheme();
  // gives access to default theme in our component
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-around"
        className={classes.mainContainer}
      >
        <Grid
          container
          direction={matchesSM ? "column-reverse" : "row"}
          justify={matchesSM ? "flex-end" : "space-between"}
          alignItems={matchesSM ? "center" : undefined}
          className={classes.rowContainer}
          style={{ height: matchesXS ? "60em" : matchesSM ? "40em" : "15em" }}
        >
          <Grid item sm>
            <Grid item container direction="column" width="auto">
              <Grid item className={classes.heroTextContainer}>
                <Typography variant="h2" align="center">
                  Loss Reserving
                </Typography>
                <Grid
                  container
                  justify="center"
                  className={classes.buttonContainer}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      component={Link}
                      to="/contact"
                      className={classes.contactButton}
                      onClick={() => props.setValue(5)}
                    >
                      Contact
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButtonHero}
                      component={Link}
                      to="/revolution"
                      onClick={() => props.setValue(2)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        height={15}
                        width={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm className={classes.pictureWrap} align="center">
            <img
              alt="logo img"
              src="/assets/iceberg-top-bw.jpg"
              className={classes.picture}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
