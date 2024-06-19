import { useEffect, useState } from "react";
import pdList from '../data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
            <a href="javascript:void(0)" className="more">전체보기</a>
          </div>
          <div className="pd-wrap">
            <div className="pd-list">
              {
                shoes.map((a, i) => {
                  return <Product shoes={shoes[i]} i={i} />
                })
              }
            </div>
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
          <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} alt="상품이미지" />
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