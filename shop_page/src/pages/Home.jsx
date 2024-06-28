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
import { vacuumInfo, haveCont } from '../mainData.js'

function Home(){
  const [shoes] = useState(pdList);
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
          end: 'bottom',
          // markers: true
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
          pinSpacing: false,
          // markers: true
        }
      });
      // pr-txt
      gsap.to('.pr-txt .txt01', {
        x: 0,
        scrollTrigger: {
          trigger: '.pr-txt',
          start: 'top 100%',
          end: 'bottom top',
          scrub: 1,
          markers: true
        }
      });
      gsap.to('.pr-txt .txt02', {
        x: '50%',
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
              vacuum.map((a, i)=>{
                return (
                  <SwiperSlide>
                    <Vacuum vacuum={vacuum[i]} i={i}/>
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
        <div className="pr-txt">
          <div className="txt-info txt01">
            <img src={`${process.env.PUBLIC_URL}/images/main/tit01_img.png`} alt="dyson's" />
          </div>
          <div className="txt-info txt02">
            <img src={`${process.env.PUBLIC_URL}/images/main/tit02_img.png`} alt="sustainability" />
          </div>
        </div>
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