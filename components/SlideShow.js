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
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (title) => {
    router.push(`/insight/${title}`);
  };

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={`${styles.customArrow} ${styles.customArrowPrev}`}
      >
        &lt;
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={`${styles.customArrow} ${styles.customArrowNext}`}
      >
        &gt;
      </button>
    );

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyle = {
      background: isSelected ? "red" : "gray",
      width: "10px",
      height: "10px",
      margin: "0 5px",
      cursor: "pointer",
      borderRadius: "50%",
      position: "absolute",
      bottom: "10px", // 원하는 위치로 조정합니다.
      left: `calc(50% - ${(slides.length * 15) / 2}px)`, // 인디케이터 너비에 따라 중앙 정렬합니다.
    };

    return (
      <li
        key={index}
        style={indicatorStyle}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <div className={styles.slideShowContainer}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000} // 자동으로 슬라이드 이동할 시간 간격 (밀리초)
        infiniteLoop={true} // 무한 슬라이드 추가
        transitionTime={1000} // 전환 속도를 1000ms로 설정합니다.
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        renderIndicator={renderIndicator}
        className={styles.carousel}
        selectedItem={currentSlide} // 현재 활성화된 슬라이드를 설정합니다.
        onChange={(index) => setCurrentSlide(index)} // 슬라이드가 변경되었을 때 호출되는 콜백입니다.
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
      <ul className={styles.indicatorContainer}>
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SlideShow;
