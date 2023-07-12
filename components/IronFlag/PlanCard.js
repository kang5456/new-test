import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#ffff",
    paddingTop: theme.spacing(0), // 여기를 조정해주세요 (위쪽 여백 추가)
    paddingBottom: theme.spacing(0), // 여기를 조정해주세요 (아래쪽 여백 추가)
  },
  
  container: {
    display: "flex", 
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position : "relative",
    backgroundImage: "url('/ironflag-plan2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat : "no-repeat",
    height : "55vh"
  },
  textOption : {
    color : '#fff',
    padding : '20px 0',
    textAlign : 'center'
  },
}));

const PlanCard = () => {
  const classes = useStyles();
  const planCard650 = useMediaQuery({query: '(max-width:650px)'})
  const planCard425 = useMediaQuery({query: '(max-width:425px)'})
  const planCard320 = useMediaQuery({query: '(max-width:320px)'})

  return (
    <div className={classes.background}>
      <div className={classes.container} style={{height : `${planCard650 ? '40vh' : planCard425 ? '35vh': planCard320 ? '28vh': '' }`}}>      
        <h1 className={classes.textOption} style={{fontSize : `${planCard650 ? '1.85rem' : planCard425 ? '1.5rem' : planCard320 ? '1rem' :  ''}`}} >Blockchain Techfin Aggregator</h1>
        <div className={classes.textOption} style={{fontSize : `${planCard650 ? '0.85rem' : planCard425 ? '0.7rem' : planCard320 ? '0.65rem' :  ''}` , width : '55%'}}>아이언플래그는 블록체인 기술 기반의 미래금융 시장을 선도합니다.</div>
      </div>
    </div>
  );
};

export default PlanCard;
