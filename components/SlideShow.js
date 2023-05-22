import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import styles from "./SlideShow.module.css";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Carousel } from "react-responsive-carousel";


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
    if (item.nodeType === "embedded-asset-block") {
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
  const router = useRouter();
  const classes = useStyles();

  const handleClick = (title) => {
    router.push(`/insight/${title}`);
  };

  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={3000} // 자동으로 슬라이드 이동할 시간 간격 (밀리초)
      infiniteLoop={true} // 무한 슬라이드 추가
      transitionTime={1000} // 전환 속도를 1000ms로 설정합니다.
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      className={styles.carousel}
    >
      {slides.map(({ fields, sys }, index) => {
        const imageUrl =
          fields?.cover?.fields?.file?.url ||
          extractImageFromContent(fields.content);
        const httpsImageUrl = imageUrl?.replace("http:", "https:");
        const title = fields.title;

        const slug = encodeURIComponent(
          title.replace(/\s+/g, "-").toLowerCase()
        ); // title 값을 slug로 변환하고 인코딩

        return (
          <div
            key={index}
            className={styles.slide}
            onClick={() => handleClick(title)}
          >
            {httpsImageUrl && <img src={httpsImageUrl} alt={title} />}
            <CardContent className={classes.contentWrapper}>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  marginBottom: "5px",
                  position: "absolute",
                  top: 20,
                  left: 20,
                }}
              >
                업계소식
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                style={{
                  position: "absolute",
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
                  position: "absolute",
                  bottom: 20,
                  left: "25px",
                }}
              >
                {sys.createdAt &&
                  new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  }).format(new Date(sys.createdAt))}
              </Typography>
            </CardContent>
          </div>
        );
      })}
    </Carousel>
  );
};

export default SlideShow;
