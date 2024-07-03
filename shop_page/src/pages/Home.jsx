import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// utils
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import gsap from 'gsap';
// local file
import pdList from '../data.js';
import { mainVisual, vacuumInfo, haveCont } from '../mainData.js'

function Home(){
  const [product] = useState(pdList);
  const [vacuum] = useState(vacuumInfo);
  const [watchItem, setWatch] = useState([]);
  useEffect(()=>{
    let watchArr = JSON.parse(localStorage.getItem('watched'));
    if(watchArr){setWatch(watchArr);}
  }, []);
  useEffect(()=>{
    if(watchItem.length > 3){
      let copy = [...watchItem];
      copy.shift();
      setWatch(copy);
      localStorage.setItem('watched', JSON.stringify(copy));
    }
  }, []);

  const boxRef = useRef(null);
  useEffect(()=>{
    let ctx = gsap.context(()=>{
      // about
      gsap.to('.about .tit-wrap', {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.about',
          start: 'top center 40px',
          end: 'bottom'
        }
      });
      gsap.to('.about .cont-wrap', {
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: '.about',
          start: 'top center 40px',
          end: 'bottom',
        }
      });
      // fix-cont
      gsap.to('.pr-have', {
        scrollTrigger: {
          trigger: '.pr-have .fix-cont',
          start: 'top top',
          end: '+=1000',
          pin: true,
          pinSpacing: false
        }
      });
      // pr-txt
      gsap.to('.pr-txt .txt01', {
        x: '-15%',
        scrollTrigger: {
          trigger: '.pr-txt',
          start: 'top 100%',
          end: 'bottom top',
          scrub: 1
        }
      });
      gsap.to('.pr-txt .txt02', {
        x: '100%',
        scrollTrigger: {
          trigger: '.pr-txt',
          start: 'top 100%%',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, boxRef);
    
    return ()=> ctx.revert();
  }, []);

  return (
    <div id="wrap" className="home" ref={boxRef}>
      <div className="wrap-inner">
        <Visual />
        <About />
        <Product product={product} />
        <PrTxt />
        <Vacuum vacuum={vacuum} />
        <FixCont />
        <div className="latest-pd">
          <strong>최근본상품</strong>
          <div>
          {
            watchItem && watchItem.map((a, i) => {
              return (
                <div key={i} className="pd-item">
                  <p>{a.title}</p>
                  <p>{a.price}</p>
                  <p>{a.content}</p>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

function Visual(){
  const [visual] = useState(mainVisual);
  const progressLineRef = useRef(null);
  const swiperRef = useRef(null);

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
    <div className="visual">
      <Swiper 
        cssMode={true}
        ref={swiperRef}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".visual-controls .swiper-pagination",
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
          nextEl: ".arrow-box .swiper-button-next",
          prevEl: ".arrow-box .swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="visual-swiper"
      >
        {
          visual.map((a,i)=>{
            return (
              <SwiperSlide>
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
        <div className="visual-controls">
          <div className="progress-box">
            <div className="swiper-pagination"></div>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 100 10" ref={progressLineRef}>
                <line x1="0" y1="0" x2="100" y2="0" />
              </svg>
            </div>
          </div>
          <div className="arrow-box">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

function About(){
  return (
    <div className="about con-box">
      <div className="tit-wrap type01">
        <div className="tit-info">
          <span>About us</span>
          <strong>More, <br className="d-pc" /><span>With less</span></strong>
        </div>
        <div className="info-txt d-pc">
          <p>
            Dyson machines have structural integrity. They are strong and they are logth. A knowledge of geometry and pioneering materials means that Dyson engineers can do more with less. Less materials, less weight, less waste.
          </p>
        </div>
      </div>
      <div className="cont-wrap">
        <div className="img-wrap">
          <img src={`${process.env.PUBLIC_URL}/images/main/about_bg.jpg`} alt="brand about" />
        </div>
        <div className="info-txt d-mb">
          <p>Dyson machines have structural integrity. They are strong and they are logth. A knowledge of geometry and pioneering materials means that Dyson engineers can do more with less. Less materials, less weight, less waste.</p>
        </div>
      </div>
    </div>
  )
}

function Product(props){
  return (
    <div className="pd-wrap con-box">
      <div className="tit-wrap">
        <div className="tit-info">
          <span>best product</span>
          <strong>베스트 제품</strong>
        </div>
        <Link to="/detail" className="more">More</ Link>
      </div>
      <div className="pd-list">
        <Swiper 
          cssMode={true}
          navigation={{
            nextEl: '.pd-wrap .btn-next',
            prevEl: '.pd-wrap .btn-prev'
          }}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              // centeredSlides: false
            }
          }}
          slidesPerView={1.5}
          // centeredSlides={true}
          spaceBetween={16}
          // autoplay={{delay: 4000}}
          modules={[Navigation]}
        >  
          {
            props.product.map((a,i)=>{
              return (
                <SwiperSlide>
                  <div className="pd-item" id={a.id} key={i}>
                    <Link to="/detail">
                      <div className="img-wrap">
                        <img src={a.mainImg} alt="상품이미지" />
                        <div className="circle-ani"></div>
                      </div>
                      <div className="pd-info">
                        <strong>{a.title}</strong>
                        <p>{a.price}</p>
                      </div>
                    </ Link>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className="swiper-controls">
        <button className="btn-prev">이전</button>
        <button className="btn-next">다음</button>
      </div>
    </div>
  )
}

function PrTxt(){
  return (
    <div className="pr-txt">
      <div className="txt-info txt01">
        <img src={`${process.env.PUBLIC_URL}/images/main/tit01_img.png`} alt="dyson's" />
      </div>
      <div className="txt-info txt02">
        <img src={`${process.env.PUBLIC_URL}/images/main/tit02_img.png`} alt="sustainability" />
      </div>
    </div>
  )
}

function Vacuum(props){
  return (
    <div className="pd-vacuum">
      <Swiper 
        navigation={{
          nextEl: '.pd-vacuum .btn-next',
          prevEl: '.pd-vacuum .btn-prev'
        }}
        direction={'vertical'}
        modules={[Navigation]}
        // loop={true}
        className="vacuum-swiper"
      >
        {
          props.vacuum.map((a, i)=>{
            return (
              <SwiperSlide>
                <div className="img-wrap">
                  <img src={`${process.env.PUBLIC_URL}/images/main/pd_item0${i + 1}_img.png`} alt="vacuum product" />
                </div>
                <div className="info-wrap">
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
        <div className="swiper-controls">
          <button className="btn-prev">이전</button>
          <button className="btn-next">다음</button>
        </div>
      </Swiper>
    </div>
  )
}

function FixCont(){
  return (
    <div className="pr-have">
      <div className="fix-cont">
        <div className="tit-wrap">
          <span className="tit-txt">MUST</span>
          <span className="icon-box">
            <img src={`${process.env.PUBLIC_URL}/images/icon/more_icon.png`} alt="dyson" />
          </span>
          <span className="tit-txt">HAVE</span>
        </div>
      </div>
      <div className="con-wrap">
        <div className="prd-wrap con-box">
          <ul className="prd-list">
            {
              haveCont.map((a, i)=>{
                return (
                  <li key={i}>
                    <div className="prd-item">
                      <a href="javascript:void(0)">
                        <div className="img-wrap">
                          <img src={`${process.env.PUBLIC_URL}/images/main/must0${i+1}_img.jpg`} alt="product img" className="default" />
                          <img src={`${process.env.PUBLIC_URL}/images/main/must0${i+1}_on_img.jpg`} alt="product img" className="hover" />
                        </div>
                        <div className="txt-wrap">
                          <p>{a.title}</p>
                          <strong>{a.content}</strong>
                        </div>
                      </a>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <button type="button" className="btn-more">
          <div className="btn-txt default">
            <span>V</span>
            <span>I</span>
            <span>E</span>
            <span>W</span>
            <span className="empty"></span>
            <span>M</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
          </div>
          <div className="btn-txt hover">
            <span>V</span>
            <span>I</span>
            <span>E</span>
            <span>W</span>
            <span className="empty"></span>
            <span>M</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
          </div>
        </button>
      </div>
    </div>
  )
}
export default Home;