import Link from "components/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Social from "components/Social";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    height: '120px',
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container 
          direction="column" 
          alignItems="center"
          style={{
            marginLeft: "calc(0% - 590px)", // 로고 위치 조정
            marginRight: "calc(50% - 530px)", // 로고 위치 조정
            marginTop: "calc(0% - -20px)",
            marginBottom: "calc(0% - 39px)",
          }}
          >
          <Grid item> 
            <img
              src="/STI_W.svg"
              alt="logo"
              style={{
                width: "150px",
                position: "relative",
                zIndex: 100,
                marginBottom: "0px",
                filter: "grayscale(100%)"
              }}
              />
          </Grid>
          {/* <Grid item>
            <Typography variant="h5" 
              className={classes.copylight}
              style={{ fontWeight: "bold" }}
              >
              ST.initiative
            </Typography>
          </Grid> */}
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="flex-end" justify="flex-end">
            <Grid item 
              style={{ 
                textAlign: "right", 
                marginRight: "calc(50% - 640px)", // 로고 위치 조정
                marginBottom: "calc(0% - 10px)",
                }}
                >
              <Social />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.copylight}
            style={{ 
              textAlign: "center", 
              fontSize: '12px',
              marginBottom: "calc(0% - 13px)",
            }}
          >
            <div style={{ color: "gray", marginBottom: "5px" }}>
              이 사이트는 블록체인 기술과 소식을 공유하기 위한 비영리적 목적으로
              운영됩니다.
            </div>
            <div>&copy;2023 CrossCheck All Rights Reserved.</div>
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
