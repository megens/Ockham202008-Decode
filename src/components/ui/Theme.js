import { createMuiTheme } from "@material-ui/core/styles";

//const ockhamBlue = "#0B72B9";
//const ockhamBlue = "#4169E1";
const ockhamBlue = "#4F81BD";
//const ockhamRed = "#ff4040";
const ockhamRed = "#E32F2B";
const ockhamGrey = "#868686";
const ockhamGreen = "#4caf50";

export default createMuiTheme({
  palette: {
    common: {
      blue: ockhamBlue,
      orange: ockhamRed,
    },
    primary: {
      main: ockhamBlue,
    },
    secondary: {
      main: ockhamRed,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway ",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1.25rem",
      color: "white",
    },
    estimate: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1.25rem",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${ockhamBlue}`,
      lineHeight: 1.5, // space between lines of text
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: ockhamBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: ockhamBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: ockhamGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1.25rem",
      color: ockhamGrey,
      fontWeight: 300,
    },
    learnButton: {
      borderColor: ockhamBlue,
      color: ockhamBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    // customize ALL instances of components
    MuiInputLabel: {
      // from Mui documentation ... color labels, etc. on InputLabels
      root: {
        color: ockhamBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      // to format the underline, which has a "before and during" state
      root: {
        color: ockhamGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${ockhamBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `3px solid ${ockhamBlue}`,
        },
      },
    },
  },
});
