import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pdList from '../data.js';

function Home(){
  const [shoes] = useState(pdList);

  return (
    <div id="wrap" className="home">
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
        <div className="pd-wrap con-box">
          <div className="tit-wrap">
            <div className="tit-info">
              <span>best product</span>
              <strong>베스트 제품</strong>
            </div>
            <Link to="/detail" className="more">더보기</ Link>
            <div className="swiper-controls">
              <button className="btn-prev">이전</button>
              <button className="btn-next">다음</button>
            </div>
          </div>
          <div className="pd-list">
            <Swiper 
              cssMode={true}
              navigation={{
                nextEl: '.pd-wrap .btn-next',
                prevEl: '.pd-wrap .btn-prev'
              }}
              slidesPerView={2.5}
              spaceBetween={30}
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
            <img src={'https://codingapple1.github.io/shop/shoes' +   (props.i + 1) + '.jpg'} alt="상품이미지" />
          </div>
          <div className="pd-info">
            <strong>{props.shoes.title}</strong>
            <p>{props.shoes.price}</p>
          </div>
        </a>
      </div>
  )
}

export default Home;