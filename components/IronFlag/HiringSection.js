import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "220px 0px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleBold: {
    color: "var(--gray-scale-800, #292929)",
    textAlign: "center",
    fontSize: "28px",
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "700",
    lineheight: "42px",
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
    width: "4%",
    margin: "36px auto",
    color: "#d3d3d3",
  },
}));

const HiringSection = () => {
  const classes = useStyles();
  const recruitView = useMediaQuery({query : '(min-width:768px)'});
  const jobs = [
    {
      image: "/job1.webp",
      link: "https://www.jobkorea.co.kr/Recruit/Co_Read/C/crossck?Oem_Code=C1",
    },
    {
      image: "/job2.webp",
      link: "https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=QzIyNkoyL014SkxBazRMUE1sNWtHQT09",
    },
  ];

  return (
    <div className={classes.root} style={{ backgroundColor: "#fff" }}>
      <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h2" align="center" className={classes.titleBold}>
          RECRUIT
        </Typography>
        <div className={classes.line}></div>
        <Typography
          align="center"
          className={classes.titleLight}
          style={{ 
            color: "var(--gray-scale-700, #686868)",
            textAlign: "center",
            fontSize: "18px",
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "27px", 
          }}
        >
          크로스체크와 함께 할 열정 넘치는 인재를 항상 찾고 있습니다.
        </Typography>
        <div className={classes.imageItem}>
          <Grid 
            style={{ 
              display: "flex",
              width: "100%",
              paddingRight: "0px",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "12px",
              flexWrap : `${recruitView ? "nowrap":  "wrap"}`
            }}
          >
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
