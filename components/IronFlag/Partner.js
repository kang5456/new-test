import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    maxWidth: "250px",
    maxHeight: "150px",
    objectFit: "contain",
  },
  description: {
    textAlign: "center",
  },
  partner: {
    textAlign: "center",
    padding: theme.spacing(0),
  },
}));

const Partner = ({ logoUrl, name, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.partner}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logoUrl} alt={name} />
      </div>
      <Typography variant="subtitle1" className={classes.description}>
        <b>{name}</b>
        <br />
        {description}
      </Typography>
    </div>
  );
};

export default Partner;
