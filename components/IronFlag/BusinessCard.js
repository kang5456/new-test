import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./BusinessCard.module.css";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "350px",
    backgroundImage: "url('/bg-image.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "400px",
    height: "50px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "all 0.4s ease",
    "&:hover": {
      backgroundColor: "#000",
      "& $title": {
        color: "#fff",
      },
      "& $icon": {
        color: "#fff",
      },
    },
  },
  icon: {
    fontSize: "2.5rem",
    color: "#7b68ee",
  },
  title: {
    marginTop: "0.4rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#000",
    "&$clicked": {
      color: "#000",
    },
    transition: "all 0.4s ease",
  },
  content: {
    padding: 0, // 여기서 padding을 0으로 설정
  },
}));

const BusinessCard = ({ title }) => {
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Card className={styles.businessCard}>
      <CardActionArea>
        <CardMedia alt={title} height="140" className={styles.businessCardMedia} />
        <CardContent className={classes.content}>
        <div className={classes.container}>
          <Typography className={classes.icon}>{/* icon */}</Typography>
          <Typography 
            className={`${classes.title} ${isClicked ? classes.clicked : ""}`}
            onClick={handleClick}
            >{title}
          </Typography>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BusinessCard;
