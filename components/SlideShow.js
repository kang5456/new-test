import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './SlideShow.module.css';

const SlideShow = ({ slides }) => {
  const [SwiperModule, setSwiperModule] = useState(null);
  const [SwiperSlideModule, setSwiperSlideModule] = useState(null);

  const router = useRouter();

  const handleClick = (title) => {
    router.push(`/insights/${title}`);
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
        disableOnInteraction: false, // 추가된 부분: 인터랙션 후에도 autoplay가 계속 작동합니다.
      }}
      
    >
      {slides.map(({ fields }, index) => {
        const imageUrl = fields?.cover?.fields?.file?.url;
        const httpsImageUrl = imageUrl?.replace("http:", "https:"); // 추가된 부분: 이미지 URL의 http를 https로 변경
        const title = fields.title;
        const subtitle = fields.type; // 수정된 부분
        const authorName = fields.author;

        return (
          <SwiperSlide 
            key={index} 
            className={styles.slide}
            onClick={() => handleClick(fields.title)}
          >
             {httpsImageUrl && <img src={httpsImageUrl} alt={title} />}
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
