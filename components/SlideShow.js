import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'; // 이 줄을 수정합니다.
import styles from './SlideShow.module.css';

SwiperCore.use([Autoplay]); // 이 줄을 추가합니다.

const SlideShow = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }} // 자동 넘어가기 기능을 활성화합니다.
    >
    {slides.map(({ fields }, index) => {
      const imageUrl = fields?.coverImage?.fields?.file?.url;
      const title = fields.title;
      const subtitle = fields.subTitle;
      const authorName = fields.author.fields.name;

      return (
        <SwiperSlide key={index} className={styles.slide}>
          {imageUrl && <img src={imageUrl} alt={title} />}
          <div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>By {authorName}</p>
          </div>
        </SwiperSlide>
      );
    })}
    </Swiper>
  );
};

export default SlideShow;
