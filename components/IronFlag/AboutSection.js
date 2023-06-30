import React, { useState } from 'react';
import { Button, Dialog, IconButton, makeStyles } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import { Container, Grid, Typography } from "@material-ui/core";

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
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    margin: `${theme.spacing(4)}px 0`,
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
    width: "1920px",
    height: "740px",
    padding: "169px 0px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PDFViewer = ({ fileUrl }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>View PDF</Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
        <iframe
          src={fileUrl}
          style={{ width: '100%', height: '90vh' }}
          frameBorder="0"
        />
      </Dialog>
    </>
  );
};

const About = ({ title, date, en, image, fileUrl, fileName }) => {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <img style={{ marginLeft: "3rem" }} src={image} alt={title} className={classes.avatar} />
      <div>
        <p className={classes.title}>{title}</p>
        <p className={classes.date}>{date}</p>
        {fileUrl && <PDFViewer fileUrl={fileUrl} />}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.background} style={{ backgroundColor: "#fff" }}>
      <Container maxWidth="md">
      <Grid container direction="column" spacing={8} alignItems="center" justify="center">
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
          <Grid justifyContent="center" style={{ display: "flex", padding: "48px 0px", alignItems: "flex-start", gap: "24px" }}>
            <Grid style={{ display: "flex", width: "480px", height: "252px", alignItems: "center", background:"var(--primary-300, #F3F5FF)", borderRadius: "16px", }}>  
              <About
                title="크로스체크 회사소개서"
                date="2022 / 한국어"
                image="/crosscheck.webp"
                fileUrl="/Ironflag-(KR)CI.pdf"
                fileName="회사소개서.pdf"
              />
            </Grid>
            <Grid style={{ display: "flex", width: "480px", height: "252px", alignItems: "center", background:"var(--primary-300, #F3F5FF)", borderRadius: "16px", }}>
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