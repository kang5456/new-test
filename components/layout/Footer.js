import Link from 'components/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Social from 'components/Social';
import FootComponent from './footer/Container';
import MFootComponent from './footer/MobileCon';
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    height: '100px',
    position: 'relative',
    marginTop: '6em',
    padding: '2em 0',
  },
  link: {
    fontSize: '1.25em',
    color: '#fff',
  },
  copylight: {
    color: '#fff',
    fontSize: '1em',
  },
  logo: {
    width: '150px',
    position: 'fixed', // 로고 위치 고정
    left: 0, // 로고를 왼쪽 끝으로 이동
    zIndex: 100, // 로고가 다른 요소 위에 위치하도록
    marginBottom: '0px',
    filter: 'grayscale(100%)',
  },
}));

const Footer = () => {
  const classes = useStyles();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footercomponent =

  <FootComponent
    classes={classes}
  />

  const mfootercomponent =

  <MFootComponent
    classes={classes}
  />

  return (
    <footer className={classes.footer}>
      {windowWidth > 768 ? footercomponent : mfootercomponent}
    </footer>
  );
};

export default Footer;
