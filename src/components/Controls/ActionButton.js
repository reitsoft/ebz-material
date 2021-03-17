import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);
// const useStyles = makeStyles((theme) => ({
//   root: {
//     minWidth: 0,
//     margin: theme.spacing(0.5),
//   },
//   primary: {
//     backgroundColor: theme.palette.primary.light,
//     "& .MuiButton-label": {
//       color: theme.palette.primary.main
//     }
//   },
//   secondary: {
//     backgroundColor: "#ffeeee",
//     "& .MuiButton-label": {
//       color: "#ff1744"
//     },
//     "& .MuiButton-root:hover": {
//       backgroundColor: "#ffcccc"
//     }
//   }
// }));

export default function ActionButton(props) {
  const classes = useStyles();
  // eslint-disable-next-line
  const { color, children, variant, onClick, type, ...other } = props;

  function IconType (){
    if (type==="content") {
       return <DeviceHubIcon className={classes.tableActionButtonIcon + " " + classes.content} />
    } else if (type==="edit"){
      return <Edit className={classes.tableActionButtonIcon + " " + classes.edit} />
    } else {
       return <Close className={classes.tableActionButtonIcon + " " + classes.close} />
    }
  }


  return (
    // <Button onClick={onClick} color={color} className={classes.root}>
    //   {children}
    // </Button>
    <IconButton onClick={onClick} className={classes.tableActionButton}>
      {IconType()}
    </IconButton>
  );
}
