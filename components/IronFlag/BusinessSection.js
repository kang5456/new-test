import { Container, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BusinessCard from "./BusinessCard";

const useStyles = makeStyles((theme) => ({
  line: {
    backgroundColor: "#868e96",
    height: "0.5px",
    width: "4%",
    margin: "36px auto",
    color: "#d3d3d3",
  },
  background: {
    backgroundColor: "#ffff",
    paddingTop: theme.spacing(5), // 여기를 조정해주세요 (위쪽 여백 추가)
    paddingBottom: theme.spacing(0), // 여기를 조정해주세요 (아래쪽 여백 추가)
  },
    iconWrapper: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    border: "3px solid #F4F4F4", // 테두리 선 색상 추가
  },
  iconText: {
    marginTop: "1rem",
    textAlign: "center", // 텍스트를 가운데 정렬
  },
  iconText2: {
    marginTop: "0.5rem",
    textAlign: "center", // 텍스트를 가운데 정렬
  },
  imageItem: {
    margin: "0 8px", // 이미지 간격 조절 (가로 간격)
  },
  bTechFINImageItem: {
    margin: "-20px", // B.TechFIN 이미지 간격 조절 (가로 간격)
  },
  bISPImageItem: {
    margin: "-40px", // B.ISP 이미지 간격 조절 (가로 간격)
  },
}));

const businesses = [
  {
    title: "B.TechFIN",
  },
  {
    title: "B.ISP",
  },
];

const bTechFINInfo = {
  title: "B.TechFIN Blockchain Technology Finance",
  description:
    "게임, 메타버스, 엔터테인먼트, ESG 블록체인 기반 금융 서비스 설계 및 플랫폼 개발",
  images: [
    {
      src: "/img1.webp",
      text: "B.GameFIN",
      width: "75%",
    },
    {
      src: "/img2.webp",
      text: "B.MetaFIN",
      width: "75%",
    },
    {
      src: "/img3.webp",
      text: "B.EnterFIN",
      width: "75%",
    },
    {
      src: "/img4.webp",
      text: "B.ESGFIN",
      width: "75%",
    },
  ],
};

const bISPInfo = {
  title: "B.ISP Blockchain Information Strategy Planning",
  images: [
    {
      src: "/icon1.webp",
      number: "01",
      text: "Analysis",
      text2: "사업 아이템 분석",
      width: "40%",
    },
    {
      src: "/icon2.webp",
      number: "02",
      text: "Suitability",
      text2: "블록체인 기술 적합성 연구",
      width: "40%",
    },
    {
      src: "/icon3.webp",
      number: "03",
      text: "Appropriateness",
      text2: "가상자산 발행 및 운용 당위성 연구",
      width: "30%",
    },
    {
      src: "/icon4.webp",
      number: "04",
      text: "Reality",
      text2: "비즈니스 모델 설계 및 현실성 연구",
      width: "40%",
    },
    {
      src: "/icon5.webp",
      number: "05",
      text: "Feasibility",
      text2: "프로젝트 공동 연구 및 추진성 검토",
      width: "40%",
    },
  ],
};

const businessInfo = {
  "B.TechFIN": bTechFINInfo,
  "B.ISP": bISPInfo,
};

const BusinessSection = () => {
  const classes = useStyles();

  const [selectedBusiness, setSelectedBusiness] = useState(
    businessInfo["B.TechFIN"]
  );

  const handleBusinessClick = (title) => {
    setSelectedBusiness(businessInfo[title]);
  };

  const splitTextAtIndex = (text, index) => {
    const words = text.split(" ");
    return [
      words.slice(0, index).join(" "),
      words.slice(index).join(" "),
    ];
  };

  const breakAtIndex = 2; // 원하는 줄바꿈 위치

  return (
    <div className={classes.background}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            marginTop: "100px",
            justifyContent: "center",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          주요 사업 부문
        </Typography>
        <div className={classes.line}></div>
        <Grid container spacing={4} justify="center">
          {businesses.map((business) => (
            <Grid
              item
              key={business.title}
              onClick={() => handleBusinessClick(business.title)}
            >
              <BusinessCard title={business.title} />
            </Grid>
          ))}
        </Grid>
        {selectedBusiness && (
          <div style={{ marginTop: "0.1rem" }}>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                style={{
                  textAlign: "center",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column", // 세로 방향으로 정렬
                  lineHeight: 1, // 각 줄간의 간격을 없애기 위해 1로 설정
                }}
              >
                {selectedBusiness.title === "B.TechFIN Blockchain Technology Finance" ? (
                  <>
                    <span style={{ whiteSpace: "nowrap", fontSize: "1.5em", marginBottom: "1%", color :"#7b68ee"}}>B.TechFIN</span>
                    <span style={{ whiteSpace: "nowrap", fontSize: "0.7em", color: "#d3d3d3" }}>Blockchain Technology Finance</span>
                  </>
                ) : selectedBusiness.title === "B.ISP Blockchain Information Strategy Planning" ? (
                  <>
                    <span style={{ whiteSpace: "nowrap", fontSize: "1.5em", marginBottom: "1%", color :"#7b68ee" }}>B.ISP</span>
                    <span style={{ whiteSpace: "nowrap", fontSize: "0.7em", color: "#d3d3d3" }}>Blockchain Information Strategy Planning</span>
                  </>  
                ) : (
                  <span style={{ whiteSpace: "nowrap", fontSize: "1.5em" }}>{selectedBusiness.title}</span>
                )}
              </Typography>
            </Grid>
            <Grid container spacing={1} justify="center">
              {/* B.TechFIN */}
              {selectedBusiness.btechfin && (
                <Grid item xs={12} sm={6} md={3}>
                  <img src={selectedBusiness.btechfin.image} style={{ width: selectedBusiness.btechfin.imageWidth }} />
                  <Typography variant="body1" style={{ marginTop: "1rem" }}>
                    {selectedBusiness.btechfin.number} {selectedBusiness.btechfin.text}
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
                    {selectedBusiness.btechfin.text2}
                  </Typography>
                </Grid>
              )}
              {/* B.ISP */}
              {selectedBusiness.bisp && (
                <Grid item xs={12} sm={6} md={3}>
                  <img src={selectedBusiness.bisp.image} style={{ width: selectedBusiness.bisp.imageWidth }} />
                  <Typography variant="body1" style={{ marginTop: "1rem" }}>
                    {selectedBusiness.bisp.number} {selectedBusiness.bisp.text}
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
                    {selectedBusiness.bisp.text2}
                  </Typography>
                </Grid>
              )}
              {/* Other images */}
              {selectedBusiness.images.map((image, index) => (
                <Grid item 
                  xs={12} sm={6} md={3} 
                  key={index}
                  className={
                    selectedBusiness.title === "B.TechFIN Blockchain Technology Finance"
                      ? classes.bTechFINImageItem
                      : selectedBusiness.title === "B.ISP Blockchain Information Strategy Planning"
                      ? classes.bISPImageItem
                      : null
                  }
                  >
                  {image.number ? (
                    <div className={classes.iconWrapper}>
                      <img src={image.src} style={{ width: image.width }} />
                    </div>
                  ) : (
                    <img
                    src={image.src}
                    style={{
                      width: image.width,
                      display: "block", // 추가
                      marginLeft: "auto", // 추가
                      marginRight: "auto", // 추가
                    }}
                  />
                  )}
                  <Typography variant="body1" style={{ marginTop: "1rem", textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>
                    <span style={{ color: "#7b68ee" }}>{image.number}</span> <span>{image.text}</span>
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: "0.5rem", textAlign: "center" }}>
                    {image.text2 &&
                      image.text2.split(" ").map((word, index, wordsArray) => (
                        <React.Fragment key={index}>
                          {word}
                          {index === breakAtIndex - 1 && <br />}
                          {index !== breakAtIndex - 1 && index < wordsArray.length - 1 && " "}
                        </React.Fragment>
                    ))}
                  </Typography>
                </Grid>
              ))}
              {/* Description */}
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  style={{
                    textAlign: "center",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column", // 세로 방향으로 정렬
                    lineHeight: 1, // 각 줄간의 간격을 없애기 위해 1로 설정
                  }}
                >
                  {selectedBusiness.description === "게임, 메타버스, 엔터테인먼트, ESG 블록체인 기반 금융 서비스 설계 및 플랫폼 개발" ? (
                    <>
                      <span style={{ whiteSpace: "nowrap", fontSize: "0.8em", marginBottom: "1%", color: "#d3d3d3" }}>게임, 메타버스, 엔터테인먼트, ESG</span>
                      <span style={{ whiteSpace: "nowrap", fontSize: "0.8em", color: "#d3d3d3" }}>블록체인 기반 금융 서비스 설계 및 플랫폼 개발</span>
                    </>
                  ) : (
                    <span style={{ whiteSpace: "nowrap", fontSize: "1.5em" }}>{selectedBusiness.description}</span>
                  )}
                </Typography>
              </Grid>
            </Grid>
          </div>
        )}
      </Container>
    </div>
  );
};

export default BusinessSection;
