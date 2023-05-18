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
    width: "40%",
    margin: "36px auto",
    color: "#d3d3d3",
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
    <div style={{ backgroundColor: "#fff" }}>
      <Container maxWidth="md">
      <Grid container direction="column" spacing={8} alignItems="center" justify="center">
          <Grid item>
          <Typography 
            variant="h2" 
            align="center"
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              marginTop: "100px",
              justifyContent: "center",
              fontWeight: "bold",
            }}
            >
              회사 소개서
            </Typography>
            <div className={classes.line}></div>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center" style={{ color: "#d3d3d3" }}>
              아이언플래그는 기술과 금융을 융·복합한 새로운 패러다임을 연구 및 제공하는
              ‘블록체인 테크핀 애그리게이터(B.TechFIN Aggregator)’ 입니다.
            </Typography>
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} padding={1}>  
              <About
                title="아이언플래그 회사소개서"
                date="2023 / 한국어"
                image="/file1.webp"
                fileUrl="/Ironflag-(KR)CI.pdf"
                fileName="회사소개서.pdf"
              />
              <About
              
              />
            </Grid>
            <Grid item xs={12} sm={6} padding={1}>
              <About
                title="IRONFLAG Company Profile"
                date="2023 / ENGLISH"
                image="/file2.webp"
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