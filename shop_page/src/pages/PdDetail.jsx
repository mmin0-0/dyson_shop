import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { increase, addItem } from '../store.js';
import { pdList, benefit } from '../data.js';
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
      category: 현재상품.id,
      id: 현재데이터.id,
      title: 현재데이터.title,
      content: 현재데이터.content,
      price: 현재데이터.price,
      img: 현재데이터.pdImg,
    });

    watchArr = Array.from(new Set(watchArr.map(item => item.id)))
    .map(id => watchArr.find(item => item.id === id));
    if(watchArr.length > 3){
      watchArr = watchArr.slice(watchArr.length - 3);
    }

    localStorage.setItem('watched', JSON.stringify(watchArr));
    setWatch(watchItem);
  }, []);

  return(
    <div id="wrap" className="detail">
      <div className="wrap-inner">
        <div className="detail-wrap con-box">
          <div className="pd-wrap">
            <PdVisual 
              price={price}
              cart={state.cart}
              dispatch={dispatch}
              현재상품={현재상품}
              현재데이터={현재데이터}
            />
            <PdInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

function PdVisual({현재상품, 현재데이터, cart, dispatch, price}){
  return (
    <div className="pd-wrap-top">
      <div className="pd-img">
        <div className="img-wrap">
          <img src={현재데이터.pdImg} alt="product img" className="org-img"/>
          <img src={현재데이터.hoImg} alt="product img" className="hover-img"/>
        </div>
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
          <p className="pr-existing"><span>1,000,000</span>원</p>
          <p className="pr-discount">25%</p>
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
            dispatch(addItem({category: 현재상품.id, id: 현재데이터.id, title: 현재데이터.title, price: 현재데이터.price, count: 1, img: 현재데이터.pdImg}))
          }}>장바구니</button>
        </div>
      </div>
    </div>
  )
}

function PdInfo(){
  return (
    <div className="pd-wrap-bottom">
      <div className="direct-wrap">
        <div className="tit-wrap">
          <strong>다이슨 공식몰 구매 혜택</strong>
          <a href="javascript:void(0)">카드사 특별 혜택 자세히 보기</a>
        </div>
        <div className="cont-wrap">
          <ul className="direct-list">
            {
              benefit.map((a, i)=>{
                return (
                  <li>
                    <a href="javascript:void(0)">
                      <div className="icon">
                        <img src={`${process.env.PUBLIC_URL}/images/icon/benefit0${i + 1}_icon.png`} alt="benefit icon" />
                      </div>
                      <strong>{a.title}</strong>
                      <div className="info">
                        <p>{a.content}</p>
                      </div>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PdDetail;