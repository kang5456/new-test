import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import styles from "./SlideShow.module.css";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    position: "relative",
    padding: "16px",
    width: "80%",
    height: "200px",
  },
}));

function extractImageFromContent(content) {
  if (!content || !content.content) {
    return null;
  }

  for (const item of content.content) {
    if (item.nodeType === 'embedded-asset-block') {
      return item.data.target.fields.file.url;
    }

    const nestedImage = extractImageFromContent(item);
    if (nestedImage) {
      return nestedImage;
    }
  }

  return null;
}

const SlideShow = ({ slides }) => {
  const [SwiperModule, setSwiperModule] = useState(null);
  const [SwiperSlideModule, setSwiperSlideModule] = useState(null);

  const router = useRouter();
  const classes = useStyles();

  const handleClick = (title) => {
    router.push(`/insight/${title}`);
  };

  useEffect(() => {
    import("swiper/react").then(({ Swiper, SwiperSlide }) => {
      setSwiperModule(Swiper);
      setSwiperSlideModule(SwiperSlide);
    });
  }, []);

  if (!SwiperModule || !SwiperSlideModule) {
    return null;
  }

  const Swiper = SwiperModule;
  const SwiperSlide = SwiperSlideModule;

  return (
    <Swiper
      spaceBetween={180}
      slidesPerView={1}
      //navigation
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      loop="true" // 무한 슬라이드 추가
      loopAdditionalSlides="1"
      autoplay={{
        delay: 2000, // 자동으로 슬라이드 이동할 시간 간격 (밀리초)
        disableOnInteraction: false, // 추가된 부분: 인터랙션 후에도 autoplay가 계속 작동합니다.
      }}
      effect="fade" // 추가: fade 효과를 사용합니다.
      speed={1000} // 추가: 전환 속도를 1000ms로 설정합니다.
      style={{
        width: "93%",
      }}
    >
      {slides.map(({ fields, sys }, index) => {
        const imageUrl = fields?.cover?.fields?.file?.url || extractImageFromContent(fields.content);
        const httpsImageUrl = imageUrl?.replace("http:", "https:");
        const title = fields.title;

        const slug = encodeURIComponent(title.replace(/\s+/g, "-").toLowerCase()); // title 값을 slug로 변환하고 인코딩

        return (
          <SwiperSlide
            key={index}
            className={styles.slide}
            onClick={() => handleClick(title)} // slug 값을 사용하도록 변경
          >
            {httpsImageUrl && <img src={httpsImageUrl} alt={title} />}
            <CardContent className={classes.contentWrapper}>
              <Typography 
                variant="subtitle1" 
                  style={{ 
                    fontWeight: "bold", 
                    marginBottom: "5px", 
                    position: "absolute", // 수정
                    top: 20, // 수정
                    left: 20, 
                    }}
                  >
                업계소식
              </Typography>
              <Typography 
                variant="h5" 
                component="h2"
                style={{ 
                  position: "absolute", // 수정
                  fontWeight: "bold",
                  fontSize: "18px",
                  top: 80,
                  left: 20,
                }}
                >
                {title}
              </Typography>
              <Typography 
                variant="subtitle2" 
                color="textSecondary" 
                style={{ 
                  position: "absolute", // 변경합니다.
                  bottom: 20, // 변경합니다.
                  left: "25px",
                  }}
                >
                {sys.createdAt && new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(sys.createdAt))}
              </Typography>
            </CardContent>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideShow;
