import React, { useEffect } from 'react';
import { Button, Dialog, IconButton, makeStyles } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import { Container, Grid, Typography } from "@material-ui/core";
import { useMediaQuery } from 'react-responsive';
import FileDownloadButton from './FileDownloadButton';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
    color: "#000",
    width: "100%",
    margin: 0,
  },
  date: {
    fontWeight: 600,
    color: "#000",
    margin: 0,
  },
  avatar: {
    width: "45%",
    height: "auto",
    borderRadius: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  avatarView : {
      margin : "0",
      width : "65%",
      padding : "15px 0px",
  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    margin: `${theme.spacing(4)}px 0`,
    justifyContent:"center",
    flexWrap : "nowrap",
    flexDirection: "row",
    padding : "0 15px",
  },
  line: {
    backgroundColor: "#868e96",
    height: "0.5px",
    width: "15%",
    margin: "36px auto",
    color: "#d3d3d3",
  },
  background: {
    backgroundColor: "#ffff",
    display: "flex",
    padding: "169px 0px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutContainerView :{
  display: "flex",
  alignItems: "center",
   flexWrap : "wrap",
   justifyContent:"center",
   padding : "10px 0",
   flexDirection: "column"
  },
  downloadContainer : {
    display:"flex",
    width : "40%",
    justifyContent: "center",
    alignItems:"flex-start",
    flexDirection: "column",
    padding  : "0 0 0 20px",
  },
  downloadContainerView : {
    width : "70%",
  }
}));


const About = ({ title, date, en, image, fileUrl, fileName }) => {
  const classes = useStyles();
  const profileAboutView = useMediaQuery({query : "(max-width:768px)"});
  const mobileAboutView = useMediaQuery({query : "(max-width:500px)"});

  return (
    <div className={profileAboutView || mobileAboutView ? classes.aboutContainerView : classes.aboutContainer}>
      <img src={image} alt={title} className={profileAboutView || mobileAboutView ?classes.avatarView :classes.avatar} />
      <div className={`${profileAboutView || mobileAboutView ?classes.downloadContainerView : classes.downloadContainer}`}>
        <div className={classes.title}>{title}</div>
        <div className={classes.date}>{date}</div>
        {fileUrl && <FileDownloadButton fileUrl={fileUrl} fileName={fileName}/>}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const classes = useStyles();

const profileView = useMediaQuery({query : "(max-width:1000px)"});
const profileView768 = useMediaQuery({query : "(max-width:768px)"});

  return (
    <div className={classes.background} style={{ backgroundColor: "#fff" }}>
      <Container maxWidth="md">
      <Grid container alignItems="center" justifyContent="center">
          <Grid item>
          <Typography 
            variant="h2" 
            align="center"
            style={{
              fontSize: "28px",
              fontFamily: "Pretendard",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "42px",
            }}
            >
              COMPANY PROFILE
            </Typography>
            <div className={classes.line}></div>
          </Grid>
          <Grid item>
            <Typography 
              variant="body1" 
              align="center" 
              style={{ 
                color: "#666",
                fontSize: "18px",
                fontFamily: "Pretendard",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "27px",
              }}
            >
              크로스체크는 고객의 비즈니스를 이해하고 최고의 STO 컨설팅 서비스로 새로운 세상을 이끌어 갑니다.
            </Typography>
          </Grid>
          <Grid style={{ display: "flex", justifyContent:"center", width:"100%", padding: "48px 0px", alignItems: "flex-start", gap: "24px", flexWrap:`${profileView || profileView768 ? "wrap": "nowrap" } `}}>
            <Grid style={{ width: `${profileView || profileView768? "55%" : "48%"}`,  background:"var(--primary-300, #F3F5FF)", borderRadius: "16px", }}>  
              <About
                title="크로스체크 회사소개서"
                date="2022 / 한국어"
                image="/crosscheck.webp"
                fileUrl="/Ironflag-(KR)CI.pdf"
                fileName="회사소개서.pdf"
              />
            </Grid>
            <Grid style={{  width: `${ profileView || profileView768 ? "55%" : "48%"}`, background:"var(--primary-300, #F3F5FF)", borderRadius: "16px", }}>
              <About
                title="IRONFLAG Company Profile"
                date="2023 / ENGLISH"
                image="/crosscheck.webp"
                fileUrl="/Ironflag-(EN)CI.pdf"
                fileName="회사소개서.pdf"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutSection;