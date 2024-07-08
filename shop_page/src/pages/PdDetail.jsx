import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { increase, addItem } from '../store.js';
import pdList from '../data.js';
// utils
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { current } from "@reduxjs/toolkit";


function PdDetail({price}){
  let state = useSelector((state)=>state);
  let dispatch = useDispatch();
  const { id, dataId } = useParams();
  const 현재상품 = pdList.find(function(e){
    return e.id == id
  });
  const 현재데이터 = 현재상품.data.find(function(e){
    return e.id.toString() == dataId
  });
  // 1. 사용자가 접속하는 상품 디테일 페이지정보 가져오기(id, title, price 등)
  // 2. 로컬스트리지에 저장(중복제거, 3개이하)
  // 3. 홈에서 watched내용으로 최근본 상품

  const [watchItem, setWatch] = useState([]);
  useEffect(()=>{
    if(!현재데이터) return;

    let watchArr = localStorage.getItem('watched');
    if(watchArr == null){
      watchArr = [];
    }else{
      watchArr = JSON.parse(watchArr);
    }
    watchArr.push({
      id: 현재데이터.id,
      title: 현재데이터.title,
      content: 현재데이터.content,
      price: 현재데이터.price,
      // data: 현재상품.data
    });

    watchArr = Array.from(new Set(watchArr.map(item => item.id)))
    .map(id => watchArr.find(item => item.id === id));
    if(watchArr.length > 3){
      watchArr = watchArr.slice(watchArr.length - 3);
    }

    localStorage.setItem('watched', JSON.stringify(watchArr));
    setWatch(watchItem);
  }, []);

  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(0);
  const currentData = 현재상품.data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  return(
    <div id="wrap" className="detail">
      <div className="wrap-inner">
        <div className="detail-wrap con-box">
          <div className="pd-wrap">
            <div className="pd-wrap-top">
              <div className="pd-img">
                <Swiper
                  className="pd-swiper"
                  cssMode={true}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{clickable: true}}
                >  
                  {
                    현재상품.data.map((item, i) => (
                      <SwiperSlide key={i}>
                        <div className="img-wrap">
                          <img src={item.pdImg} alt="product img" />
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
                {/* <div className="pagination">
                  {현재상품.data.length > itemsPerPage && (
                    Array.from({ length: Math.ceil(현재상품.data.length / itemsPerPage) }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        className={index === currentPage ? 'active': ''}
                      >
                        <img src={현재상품.thumbs} alt="pagination" />
                      </button>
                    ))
                  )}
                </div> */}
              </div>
              <div className="pd-info">
                <div className="tit-wrap">
                  <div className="main-tit">
                    <span>{현재상품.title}</span>
                    <strong>{현재데이터.title}</strong>
                  </div>
                  <div className="sub-tit">
                    <p>{현재데이터.content}</p>
                  </div>
                </div>
                <div className="price-wrap">
                  <p className="pr-final"><span>{price(현재데이터.price)}</span>원</p>
                  <p className="pr-existing"><span>28,000</span>원</p>
                  <p className="pr-discount">54%</p>
                </div>
                <div className="option-wrap">
                  <div>
                    <div className="tit">원산지</div>
                    <div className="data">중국</div>
                  </div>
                  <div>
                    <div className="tit">구매혜택</div>
                    <div className="data">20 포인트 적립예정</div>
                  </div>
                  <div>
                    <div className="tit">배송비</div>
                    <div className="data">3,000원 (50,000원 이상 무료배송)</div>
                  </div>
                </div>
                <div className="buy-wrap btn-wrap">
                  <button type="button" className="btn-zzim">찜하기</button>
                  <button type="button" className="btn-cart type01" onClick={()=>{
                    dispatch(addItem({id: 현재데이터.id, name: 현재데이터.title, price: 현재데이터.price, count: 1}))
                  }}>장바구니</button>
                </div>
              </div>
            </div>
            <div className="pd-wrap-bottom">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PdDetail;