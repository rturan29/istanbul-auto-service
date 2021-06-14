import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  icon: props => ({
    fontSize: 80,
    fontFamily: "CarRepair",
    transition: "all 0.5s",
    "&:before": {
      content: `'\\${props.iconName}'`,
    },
    "&:hover": {
      color: "#fff",
    },
  }),
}));

const Icon = props => {
  const classes = useStyles(props);
  return <span className={classes.icon} {...props} />;
};

export default Icon;
