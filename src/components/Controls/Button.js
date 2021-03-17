import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import styles from "../../assets/jss/material-dashboard-react/components/buttonStyle";

const useStyles = makeStyles(theme=>({
    root: {
        margin: theme.spacing(0.5)
    },
    ...styles
}))

export default function Button(props) {
  const classes = useStyles()
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <MuiButton
      className={classes[color] + " " + classes.root}
      variant={variant || "contained"}
      size={size || "medium"}
      color={color|| "primary"}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}
