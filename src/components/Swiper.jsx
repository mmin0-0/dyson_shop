import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { pdList } from '../data';
import { mainVisual, vacuumInfo } from '../mainData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ImgWrap } from './Image';

export function MainVisual() {
  const progressLineRef = useRef(null);
  const swiperRef = useRef(null);
  const [visual] = useState(mainVisual);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const updateProgress = (s, time, progress) => {
        if (progressLineRef.current) {
          progressLineRef.current.style.setProperty('--progress', 1 - progress);
        }
      };
      swiperInstance.on('autoplayTimeLeft', updateProgress);

      // 슬라이드 변경 시 autoplay 재설정
      const handleSlideChange = () => {
        swiperInstance.autoplay.start();
        const timeLeft = swiperInstance.params.autoplay.delay;
        const progress = 1 - (swiperInstance.autoplay.timeLeft / swiperInstance.params.autoplay.delay);
        updateProgress(swiperInstance, timeLeft, progress);
      };
      swiperInstance.on('slideChange', handleSlideChange);

      return () => {
        swiperInstance.off('autoplayTimeLeft', updateProgress);
        swiperInstance.off('slideChange', handleSlideChange);
      };
    }
  }, []);

  return (
    <Swiper
      cssMode={true}
      ref={swiperRef}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".visual-swiper .swiper-pagination",
        clickable: false,
        type: "custom",
        renderCustom: (swiper, current, total) => {
          return (
            '<span class="current">' + 0 + (current) + '</span>' +
            '<span class="total">' + 0 + (total) + '</span>'
          );
        }
      }}
      navigation={{
        nextEl: ".visual-swiper .swiper-button-next",
        prevEl: ".visual-swiper .swiper-button-prev",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="visual-swiper"
    >
      {
        visual.map((a, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="img-wrap">
                <img src={`${process.env.PUBLIC_URL}/images/main/main_visual0${i + 1}.jpg`} alt="main visual" />
              </div>
              <div className="txt-wrap">
                <div className="txt-box">
                  <strong>{a.title}</strong>
                  <p>{a.subTit}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
      <div className="controls">
        <div className="progress-box">
          <div className="swiper-pagination"></div>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 100 10" ref={progressLineRef}>
              <line x1="0" y1="0" x2="100" y2="0" />
            </svg>
          </div>
        </div>
        <div className="arrow-wrap">
          <button className="swiper-button-prev">이전</button>
          <button className="swiper-button-next">다음</button>
        </div>
      </div>
    </Swiper>
  )
}

export function ProductList() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: '#product .btn-next',
          prevEl: '#product .btn-prev'
        }}
        slidesPerView={1.5}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          }
        }}
      >
        {
          pdList.map((a, i) => {
            return (
              <SwiperSlide key={i}>
                <Link to="/detail">
                  <div className="preview" id={a.id} key={i}>
                    <ImgWrap src={a.mainImg} alt="제품이미지" />
                    <div className="circle-ani"></div>
                  </div>
                    <div className="info">
                      <strong>{a.title}</strong>
                      <p>{a.price}</p>
                    </div>
                </ Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className="controls">
        <button className="swiper-button-prev">이전</button>
        <button className="swiper-button-next">다음</button>
      </div>
    </>
  )
}

export function VacuumList() {
  return (
    <Swiper
      navigation={{
        nextEl: '#vacuum .swiper-button-next',
        prevEl: '#vacuum .swiper-button-prev'
      }}
      direction={'vertical'}
      modules={[Autoplay, Navigation]}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      className="vacuum-swiper"
    >
      {
        vacuumInfo.map((a, i) => {
          return (
            <SwiperSlide key={i}>
              <ImgWrap src={`${process.env.PUBLIC_URL}/images/main/pd_item0${i + 1}_img.png`} alt="product" />
              <div className={`info-wrap ${a.class}`}>
                <div className="num">0{i + 1}</div>
                <div className="info-txt">
                  <div className="tit-wrap">
                    <strong>{a.title[0]}</strong>
                    <strong>{a.title[1]}</strong>
                    <strong>{a.title[2]}</strong>
                  </div>
                  <p>
                    {a.content}
                    <span>{a.note}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
      <div className="controls">
        <button className="swiper-button-prev">이전</button>
        <button className="swiper-button-next">다음</button>
      </div>
    </Swiper>
  )
}