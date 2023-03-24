import React, { useState, useEffect } from 'react';

import styles from './SlideShow.module.css';

const SlideShow = ({ slides }) => {
  const [SwiperModule, setSwiperModule] = useState(null);
  const [SwiperSlideModule, setSwiperSlideModule] = useState(null);

  useEffect(() => {
    import('swiper/react').then(({ Swiper, SwiperSlide }) => {
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
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 3000, // 자동으로 슬라이드 이동할 시간 간격 (밀리초)
        disableOnInteraction: false // 슬라이드 이동 후 자동 슬라이드 기능을 일시 중지할 지 여부
      }}
      
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