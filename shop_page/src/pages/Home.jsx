import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// utils
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import gsap from 'gsap';
// local file
import pdList from '../data.js';
import vacuumInfo from '../mainData.js'

function Home(){
  const [shoes] = useState(pdList);
  const [vacuum] = useState(vacuumInfo);

  const boxRef = useRef(null);
  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.to('.about .tit-wrap', {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.about',
          start: 'top center 40px',
          end: 'bottom',
          markers: true
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

      // gsap.to('.box2', {
      //   y: 100,
      //   scrollTrigger: {
      //     trigger: '.box2',
      //     start: 'top 30%',
      //     end: 'bottom',
      //     // markers: true
      //   }
      // });
    }, boxRef);

    return ()=> ctx.revert();
  }, []);

  return (
    <div id="wrap" className="home" ref={boxRef}>
      <div className="wrap-inner">
        <div className="visual">
          <Swiper 
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="visual-swiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
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
                shoes.map((a, i) => {
                  return (
                  <SwiperSlide>
                    <Product shoes={shoes[i]} i={i} />
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
        <div className="pd-vacuum">
          <Swiper 
            cssMode={true}
            navigation={true}
            modules={[Navigation]}
            className="vacuum-swiper"
          >
            {
              vacuum.map((a, i)=>{
                return (
                  <SwiperSlide>
                    <Vacuum vacuum={vacuum[i]} i={i}/>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <section></section>
      </div>
    </div>
  )
}

function Product(props){
  return (
    <div className="pd-item" id={props.shoes.id}>
      <a href={'/detail/' + props.i}>
        <div className="img-wrap">
          <img src={props.shoes.mainImg} alt="상품이미지" />
          <div className="circle-ani"></div>
        </div>
        <div className="pd-info">
          <strong>{props.shoes.title}</strong>
          {/* <p>{props.shoes.price}</p> */}
        </div>
      </a>
    </div>
  )
}

function Vacuum(props){
  return (
    <>
      <div className="img-wrap">
        <img src={`${process.env.PUBLIC_URL}/images/main/pd_item0${props.i + 1}_img.png`} alt="vacuum product" />
      </div>
      <div className="info-wrap">
        <div className="num">0{props.i + 1}</div>
        <div className="info-txt">
          <div className="tit-wrap">
            <strong>{props.vacuum.title[0]}</strong>
            <strong>{props.vacuum.title[1]}</strong>
            <strong>{props.vacuum.title[2]}</strong>
          </div>
          <p>
            {props.vacuum.content}
            <span>{props.vacuum.note}</span>
          </p>
        </div>
    </div>
    </>
  )
}

export default Home;