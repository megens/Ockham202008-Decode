import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  simpleDiv: {
    height: "600px",
    [theme.breakpoints.down("md")]: { height: "400px" },
    [theme.breakpoints.down("sm")]: { height: "200px" },
  },
}));

const NoMatch = () => {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme(); // gives access to default theme in our component
  //const match = useRouteMatch("write-the-url-you-want-to-match-here");

  return (
    <div className={classes.simpleDiv}>
      <h1>
        <br />
        No path match for<code> {location.pathname}</code>
      </h1>
    </div>
  );
};

export default NoMatch;
