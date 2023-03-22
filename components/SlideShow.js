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
