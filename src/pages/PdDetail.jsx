import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { increase, addItem } from '../store.js';
import { pdList, benefit, tabMenu } from '../data.js';
import { Link } from 'react-router-dom';
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
    if(watchArr.length > 6){
      watchArr = watchArr.slice(watchArr.length - 6);
    }

    localStorage.setItem('watched', JSON.stringify(watchArr));
    setWatch(watchItem);
  }, []);

  return(
    <div id="wrap" className="detail">
      <div className="wrap-inner">
        <div className="detail-wrap">
          <div className="pd-wrap">
            <PdVisual 
              price={price}
              cart={state.cart}
              dispatch={dispatch}
              현재상품={현재상품}
              현재데이터={현재데이터}
            />
            <PdInfo 
              현재상품={현재상품}
              현재데이터={현재데이터}
            />
            <StoreInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

function PdVisual({현재상품, 현재데이터,  dispatch, price}){
  return (
    <div className="pd-wrap-top con-box">
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

function PdInfo({현재상품, 현재데이터}){
  return (
    <div className="pd-wrap-bottom">
      <div className="direct-wrap">
        <div className="con-box">
          <div className="tit-wrap">
            <span>BUY FROM</span>
            <strong>다이슨 공식몰 구매 혜택</strong>
            <Link to="#">카드사 특별 혜택 자세히 보기</Link>
          </div>
          <div className="cont-wrap">
            <ul className="direct-list">
              {
                benefit.map((a, i)=>{
                  return (
                    <li key={a.title}>
                      <Link to="#">
                        <div className="icon">
                          <img src={`${process.env.PUBLIC_URL}/images/icon/benefit0${i + 1}_icon.png`} alt="benefit icon" />
                        </div>
                        <div className="txt-info">
                          <strong>{a.title}</strong>
                        </div>
                        <div className="info">
                          <p>{a.content}</p>
                        </div>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="pd-char">
        <div className="con-box">
          <div className="tit-wrap">
            <span>PRODUCT INFORMATION</span>
            <strong>제품특징</strong>
            <p>엔지니어들은 창작에 대한 욕구와 더 나은 세상을 만들고자 하는 열망, 문제 해결의 필요성을 마음속에 항상 간직하고 있습니다.</p>
          </div>
          <div className="con-wrap">
            <div className="char-list">
              {
                현재데이터.pdChar.map((item, i)=>{
                  return (
                  <div key={item.id} className="list-item">
                    <div className="img-wrap">
                      <img src={`${process.env.PUBLIC_URL}/images/sub/pd_char/0${현재데이터.id}/0${i}.jpg`} alt="제품특징" />
                    </div>
                    <div className="txt-info">
                      <strong>{item.tit}</strong>
                      <p>{item.content}</p>
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StoreInfo(){
  const [currentTab, clickTab] = useState(0);
  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  
  return(
    <div className="store-wrap">
      <div className="con-box">
        <div className="tit-wrap">
          <span>DEMO STORE</span>
          <strong>다이슨 데모 스토어</strong>
          <p>다이슨 기술은 생활의 실제적인 문제를 해결하기 위해 설계되었습니다. 그것을 이해하기 위한 가장 좋은 방법은 제품을 경험하는 것입니다. 다이슨 데모 스토어는 제품을 직접 경험할 수 있는 공간입니다.</p>
        </div>
        <div className="con-wrap">
          <div className="tab-wrap">
            <ul className="tab-tit">
              {
                tabMenu.map((item ,index) => (
                  <li 
                    key={index}
                    className={index === currentTab ? 'on' :''}
                    onClick={() => selectMenuHandler(index)}
                    >
                      <Link to="#">{index + 1}</Link>
                  </li>
                ))
              }
            </ul>
            <div className="tab-cont">
              <div className="img-wrap">
                <img src={`${process.env.PUBLIC_URL}/images/sub/map_img0${currentTab + 1}.jpg`} alt="demo store map" />
              </div>
              <div className="tab-info">
                <strong>{tabMenu[currentTab].tit}</strong>
                <div className="txt-wrap">
                  <p><span>주소: </span>{tabMenu[currentTab].address}</p>
                  <p><span>영업시간: </span>{tabMenu[currentTab].content}</p>
                  <Link to="#">시연 서비스 예약하기</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PdDetail;