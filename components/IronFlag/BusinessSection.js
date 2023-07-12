import { Container, Grid, Typography } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BusinessCard from './BusinessCard';

const useStyles = makeStyles((theme) => ({
  line: {
    backgroundColor: '#868e96',
    height: '0.5px',
    width: '4%',
    margin: '36px auto',
    color: '#d3d3d3',
  },
  background: {
    backgroundColor: "#ffff",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
  iconWrapper: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    border: '3px solid #F4F4F4', // 테두리 선 색상 추가
  },
  iconText: {
    marginTop: '1rem',
    textAlign: 'center', // 텍스트를 가운데 정렬
  },
  iconText2: {
    marginTop: '0.5rem',
    textAlign: 'center', // 텍스트를 가운데 정렬
  },
  imageItem: {
    margin: '0 8px', // 이미지 간격 조절 (가로 간격)
  },
  bTechFINImageItem: {
    margin: '-20px', // B.TechFIN 이미지 간격 조절 (가로 간격)
  },
  bISPImageItem: {
    margin: '-40px', // B.ISP 이미지 간격 조절 (가로 간격)
  },
  bTechFINImageItem: {

    margin: "0",
    width:"300px",
    height : "250px",
    maxWidth: "250px",
    maxHeight : "210px",
  }
}));

const businesses = [
  {
    title: 'B.STIIM',
  },
  {
    title: 'B.ISP',
  },
];

const bTechFINInfo = {
  title: 'B.TechFIN Blockchain Technology Finance',
  description:
    '게임, 메타버스, 엔터테인먼트, ESG 블록체인 기반 금융 서비스 설계 및 플랫폼 개발',
  images: [
    {
      src: '/BSTIIM2.webp',
      //text: "B.GameFIN",
      width: '100%',
      height: '219px',
      borderRadius: '16px',
      background:
        'url(<path-to-image>), lightgray -41.243px -13.048px / 119.077% 113.302% no-repeat',
    },
    {
      src: '/BSTIIM3.webp',
      //text: "B.MetaFIN",
      width: '100%',
      height: '219px',
      borderRadius: '16px',
      background:
        'url(<path-to-image>), lightgray -41.243px -13.048px / 119.077% 113.302% no-repeat',
    },
    {
      src: '/BSTIIM4.webp',
      width: '100%',
      height: '219px',
      borderRadius: '16px',
      background:
        'url(<path-to-image>), lightgray -41.243px -13.048px / 119.077% 113.302% no-repeat',
    },
    // {
    //   src: "/img4.webp",
    //   //text: "B.ESGFIN",
    //   width: "75%",
    // },
  ],
};

const bISPInfo = {
  title: 'B.ISP Blockchain Information Strategy Planning',
  images: [
    {
      src: '/icon1.webp',
      number: '01',
      text: 'Analysis',
      text2: '사업 아이템 분석',
      width: '40%',
    },
    {
      src: '/icon2.webp',
      number: '02',
      text: 'Suitability',
      text2: '블록체인 기술 적합성 연구',
      width: '40%',
    },
    {
      src: '/icon3.webp',
      number: '03',
      text: 'Appropriateness',
      text2: '가상자산 발행 및 운용 당위성 연구',
      width: '30%',
    },
    {
      src: '/icon4.webp',
      number: '04',
      text: 'Reality',
      text2: '비즈니스 모델 설계 및 현실성 연구',
      width: '40%',
    },
    {
      src: '/icon5.webp',
      number: '05',
      text: 'Feasibility',
      text2: '프로젝트 공동 연구 및 추진성 검토',
      width: '40%',
    },
  ],
};

const businessInfo = {
  'B.TechFIN': bTechFINInfo,
  'B.ISP': bISPInfo,
};

const BusinessSection = () => {
  const classes = useStyles();

  const [selectedBusiness, setSelectedBusiness] = useState(
    businessInfo['B.TechFIN']
  );

  const handleBusinessClick = (title) => {
    setSelectedBusiness(businessInfo[title]);
  };

  const splitTextAtIndex = (text, index) => {
    const words = text.split(' ');
    return [words.slice(0, index).join(' '), words.slice(index).join(' ')];
  };

  const breakAtIndex = 2; // 원하는 줄바꿈 위치

  const [selectSTIIM, setSelectSTIIM] = useState(true);
  const [selectISP, setSelectISP] = useState(false);

  const clickSTIIM = () => {
    setSelectSTIIM(true);
    setSelectISP(false);
  };
  const clickISP = () => {
    setSelectSTIIM(false);
    setSelectISP(true);
  };

  return (
    <div className={classes.background}>
      <div style={{ width: '100%' }}>
        <Typography
          variant='h2'
          style={{
            textAlign: 'center',
            fontSize: '28px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '42px',
          }}
          gutterBottom
        >
          주요 사업 부문
        </Typography>
        <div className={classes.line}></div>
        <Grid container justifyContent='center'>
          <Grid
            key={'B.STIIM'}
            onClick={() => handleBusinessClick('B.STIIM')}
            style={{
              width: '40%',
            }}
          >
            <BusinessCard
              title={'B.STIIM'}
              select={clickSTIIM}
              state={selectSTIIM}
            />
          </Grid>
          <Grid
            key={'B.ISP'}
            onClick={() => handleBusinessClick('B.ISP')}
            style={{
              width: '40%',
            }}
          >
            <BusinessCard title={'B.ISP'} select={clickISP} state={selectISP} />
          </Grid>
        </Grid>
        {selectedBusiness && (
          <div style={{ marginTop: '0.1rem' }}>
            <Grid item xs={12}>
              <Typography
                variant='h3'
                style={{
                  textAlign: 'center',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column', // 세로 방향으로 정렬
                  lineHeight: 1, // 각 줄간의 간격을 없애기 위해 1로 설정
                }}
              >
                {selectedBusiness.title ===
                'B.TechFIN Blockchain Technology Finance' ? (
                  <>
                    <span
                      style={{
                        whiteSpace: 'nowrap',
                        fontSize: '28px',
                        fontFamily: 'Pretendard',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '42px',
                        marginBottom: '1%',
                        color: '#7b68ee',
                      }}
                    >
                      B.STIIM
                    </span>
                    <span
                      style={{
                        color: '#7C7C7C',
                        fontSize: '18px',
                        fontFamily: 'Pretendard',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '27px',
                      }}
                    >
                      Securities Token Total Investmaent Indicator Map
                    </span>
                  </>
                ) : selectedBusiness.title ===
                  'B.ISP Blockchain Information Strategy Planning' ? (
                  <>
                    <span
                      style={{
                        whiteSpace: 'nowrap',
                        fontSize: '28px',
                        fontFamily: 'Pretendard',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '42px',
                        marginBottom: '1%',
                        color: '#7b68ee',
                      }}
                    >
                      B.ISP
                    </span>
                    <span
                      style={{
                        color: '#7C7C7C',
                        fontSize: '18px',
                        fontFamily: 'Pretendard',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '27px',
                      }}
                    >
                      Blockchain Information Strategy Planning
                    </span>
                  </>
                ) : (
                  <span style={{ whiteSpace: 'nowrap', fontSize: '1.5em' }}>
                    {selectedBusiness.title}
                  </span>
                )}
              </Typography>
            </Grid>

            <Grid container justifyContent="center" alignItems="center" style={{padding : "0 5%"}}>
              {/* B.TechFIN */}
              {selectedBusiness.btechfin && (
                <Grid xs={12} sm={6} md={2}>
                  <img
                    src={selectedBusiness.btechfin.image}
                    style={{ width: selectedBusiness.btechfin.imageWidth}}
                  />
                  {/* <Typography variant="body1" style={{ marginTop: "1rem" }}>
                    {selectedBusiness.btechfin.number}{" "}
                    {selectedBusiness.btechfin.text}
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
                    {selectedBusiness.btechfin.text2}
                  </Typography> */}
                </Grid>
              )}
              {/* B.ISP */}
              {selectedBusiness.bisp && (
                <Grid item xs={12} sm={6} md={3}>
                  <img
                    src={selectedBusiness.bisp.image}
                    style={{ width: selectedBusiness.bisp.imageWidth }}
                  />
                  <Typography variant='body1' style={{ marginTop: '1rem' }}>
                    {selectedBusiness.bisp.number} {selectedBusiness.bisp.text}
                  </Typography>
                  <Typography variant='body1' style={{ marginTop: '0.5rem' }}>
                    {selectedBusiness.bisp.text2}
                  </Typography>
                </Grid>
              )}
              {/* Other images */}
              {selectedBusiness.images.map((image, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  className={
                    selectedBusiness.title ===
                    'B.TechFIN Blockchain Technology Finance'
                      ? classes.bTechFINImageItem
                      : selectedBusiness.title ===
                        'B.ISP Blockchain Information Strategy Planning'
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

                        width: "100%",
                        height: "100%",
                        padding:"5px"
                        // display: "block", // 추가
                        // marginLeft: "auto", // 추가
                        // marginRight: "auto", // 추가
                      }}
                    />
                  )}
                  {/* <Typography
                    variant="body1"
                    style={{
                      marginTop: "1rem",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    <span style={{ color: "#7b68ee" }}>{image.number}</span>{" "}
                    <span>{image.text}</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ marginTop: "0.5rem", textAlign: "center" }}
                  >
                    {image.text2 &&
                      image.text2.split(" ").map((word, index, wordsArray) => (
                        <React.Fragment key={index}>
                          {word}
                          {index === breakAtIndex - 1 && <br />}
                          {index !== breakAtIndex - 1 &&
                            index < wordsArray.length - 1 &&
                            " "}
                        </React.Fragment>
                      ))}
                  </Typography> */}
                </Grid>
              ))}
              {/* Description */}
              <Grid item xs={12}>
                <Typography
                  variant='h3'
                  style={{

                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column", // 세로 방향으로 정렬
                    lineHeight: 1, // 각 줄간의 간격을 없애기 위해 1로 설정
                    padding : "40px 0 0 0 "
                  }}
                >
                  {selectedBusiness.description ===
                  '게임, 메타버스, 엔터테인먼트, ESG 블록체인 기반 금융 서비스 설계 및 플랫폼 개발' ? (
                    <>
                      <span
                        style={{
                          // whiteSpace: "nowrap",
                          padding: '0 10px',
                          fontSize: '18px',
                          fontFamily: 'Pretendard',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '27px',
                          color: 'var(--gray-scale-700, #686868)',
                        }}
                      >
                        토큰증권의 기초자산에 대해 투자자가 신뢰할 수 있는
                        투자정보를 기반으로 해당 상품에 직접 투자할 수 있는
                        채널링 서비스와
                      </span>
                      <span
                        style={{
                          // whiteSpace: "nowrap",
                          padding: '0 10px',
                          fontSize: '18px',
                          fontFamily: 'Pretendard',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '27px',
                          color: 'var(--gray-scale-700, #686868)',
                        }}
                      >
                        자금을 분산하여 다양한 기회를 포착하고, 분산을 통해
                        리스크를 최소화할 수 있는 FUND/ETF/ETN/ELS 등
                      </span>
                      <span
                        style={{
                          // whiteSpace: "nowrap",
                          padding: '0 10px',
                          fontSize: '18px',
                          fontFamily: 'Pretendard',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '27px',
                          color: 'var(--gray-scale-700, #686868)',
                        }}
                      >
                        포트폴리오 투자와 같이, 토큰증권에서 발생하는 수익의
                        일부에 투자하는 지역 단위의 묶음 간접투자상품을 제공하는
                        서비스
                      </span>
                    </>
                  ) : (
                    <span style={{ whiteSpace: 'nowrap', fontSize: '1.5em' }}>
                      {selectedBusiness.description}
                    </span>
                  )}
                </Typography>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessSection;