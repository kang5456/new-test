import Link from 'components/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Social from 'components/Social';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    height: '120px',
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

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <img
          src="/STI_W.png"
          alt="logo"
          style={{
            width: '150px',
            position: 'relative',
            marginTop: "20px"
          }}
        />
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={12}>
            <Typography
              className={classes.copylight}
              style={{
                textAlign: 'center',
                fontSize: '12px',
              }}
            >
              <div style={{ color: 'gray', marginBottom: '0px' }}>
                이 사이트는 블록체인 기술과 소식을 공유하기 위한 비영리적
                목적으로 운영됩니다.
              </div>
              <div>&copy;2023 CrossCheck All Rights Reserved.</div>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="flex-end">
            <Grid
              item
              style={{
                textAlign: 'right',
                marginTop: '-110px',
                marginRight: '50px',
              }}
            >
              <Social />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
