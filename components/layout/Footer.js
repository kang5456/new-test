import Link from "components/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Social from "components/Social";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" className={classes.copylight}>
              B.Initiative
            </Typography>
          </Grid>
          <Grid item>
            <Social />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.copylight}
            style={{ textAlign: "center", fontSize: '12px' }}
          >
            <div style={{ color: "gray", marginBottom: "5px" }}>
              이 사이트는 블록체인 기술과 소식을 공유하기 위한 비영리적 목적으로
              운영됩니다.
            </div>
            <div>&copy;2023 Ironflag All Rights Reserved.</div>
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
