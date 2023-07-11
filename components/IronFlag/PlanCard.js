import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#ffff",
    paddingTop: theme.spacing(0), // 여기를 조정해주세요 (위쪽 여백 추가)
    paddingBottom: theme.spacing(0), // 여기를 조정해주세요 (아래쪽 여백 추가)
  },
  container: {
    display: "flex", 
    width: "100%",
    // height: "320px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PlanCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <img src="/ironflag-plan.png" alt="Top Right" style={{width:"100%"}}/>
      </div>
    </div>
  );
};

export default PlanCard;
