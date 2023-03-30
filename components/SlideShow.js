import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './SlideShow.module.css';

const SlideShow = ({ slides }) => {
  const [SwiperModule, setSwiperModule] = useState(null);
  const [SwiperSlideModule, setSwiperSlideModule] = useState(null);

  const router = useRouter();

  const handleClick = (type, title) => {
    router.push(`/insights/${type}/${encodeURIComponent(title)}`);
  };

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
      loop // 무한 슬라이드 추가
      autoplay={{
        delay: 2000, // 자동으로 슬라이드 이동할 시간 간격 (밀리초)
      }}
      
    >
      {slides.map(({ fields }, index) => {
        const imageUrl = fields?.coverImage?.fields?.file?.url;
        const title = fields.title;
        const subtitle = fields.type;
        const authorName = fields.author; // 변경된 부분: 작성자 정보를 직접 액세스합니다.

        return (
          <SwiperSlide 
            key={index} 
            className={styles.slide}
            onClick={() => handleClick(fields.type, fields.title)}
          >
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
