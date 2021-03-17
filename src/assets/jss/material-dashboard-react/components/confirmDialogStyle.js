// eslint-disable-line
import {
  grayColor, // eslint-disable-line
  primaryColor, // eslint-disable-line
  infoColor, // eslint-disable-line
  successColor, // eslint-disable-line
  warningColor, // eslint-disable-line
  dangerColor,
  roseColor, // eslint-disable-line
  whiteColor,
  blackColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const confirmDialogStyle = {
  dialog: {
    padding: "16px",
    paddingBottom: "24px",
    position: "absolute",
    top: "40px",
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogActions: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: "#fca29f",
    color: dangerColor[0],
    "&:hover": {
      backgroundColor: "#fca29f",
      color: dangerColor[0],
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },


  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};

export default confirmDialogStyle;
