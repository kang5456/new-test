import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#ffff",
    paddingTop: theme.spacing(0), // 여기를 조정해주세요 (위쪽 여백 추가)
    paddingBottom: theme.spacing(20), // 여기를 조정해주세요 (아래쪽 여백 추가)
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PlanCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container maxWidth="lg" className={classes.container}>
        <img src="/ironflag-plan.png" alt="Top Right" style={{ width: "164%" }} />
      </Container>
    </div>
  );
};

export default PlanCard;
