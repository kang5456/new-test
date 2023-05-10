import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#f2f2f2",
  },
  titleBold: {
    fontWeight: 600,
    marginBottom: theme.spacing(4),
  },
  titleLight: {
    fontWeight: 300,
    marginBottom: theme.spacing(4),
  },
  image: {
    maxWidth: "75%",
    height: "auto",
    marginLeft: "4px", // 이미지 왼쪽 마진
    marginRight: "4px", // 이미지 오른쪽 마진
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  line: {
    backgroundColor: "#868e96",
    height: "0.5px",
    width: "6%",
    margin: "36px auto",
    color: "#d3d3d3",
  },
}));

const HiringSection = () => {
  const classes = useStyles();

  const jobs = [
    {
      image: "/job1.webp",
      link: "https://www.jobkorea.co.kr/Recruit/Co_Read/Recruit/C/ironflag1",
    },
    {
      image: "/job2.webp",
      link: "https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=QzIyNkoyL014SkxBazRMUE1sNWtHQT09",
    },
    {
      image: "/job3.webp",
      link: "https://www.gamejob.co.kr/Recruit/joblist?menucode=searchtot&searchtype=all&searchstring=%EC%95%84%EC%9D%B4%EC%96%B8%ED%94%8C%EB%9E%98%EA%B7%B8",
    },
  ];

  return (
    <div className={classes.root} style={{ backgroundColor: "#fff" }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" className={classes.titleBold}>
          채용
        </Typography>
        <div className={classes.line}></div>
        <Typography
          align="center"
          className={classes.titleLight}
          style={{ color: "#000" }}
        >
          아이언플래그와 함께 할 열정 넘치는 인재를 항상 찾고 있습니다.
        </Typography>
        <div className={classes.imageItem}>
          <Grid container spacing={1}>
            {jobs.map((job, index) => (
              <Grid item key={index} xs={12} md={4}>
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  <div className={classes.imageContainer}>
                    <img src={job.image} className={classes.image} alt="" />
                  </div>
                </a>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default HiringSection;
