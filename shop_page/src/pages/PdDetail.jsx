import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { increase, addItem } from '../store.js';

function PdDetail(props){
  let state = useSelector((state)=>state);
  let dispatch = useDispatch();
  const {id} = useParams();
  const 현재상품 = props.product.find(function(e){
    return e.id == id
  });
  // 1. 사용자가 접속하는 상품 디테일 페이지정보 가져오기(id, title, price 등)
  // 2. 로컬스트리지에 저장(중복제거, 3개이하)
  // 3. 홈에서 watched내용으로 최근본 상품

  let [watchItem, setWatch] = useState([]);
  useEffect(()=>{
    if(!현재상품) return;

    let watchArr = localStorage.getItem('watched');
    if(watchArr == null){
      watchArr = [];
    }else{
      watchArr = JSON.parse(watchArr);
    }
    watchArr.push({
      id: 현재상품.id,
      title: 현재상품.title,
      content: 현재상품.content,
      price: 현재상품.price,
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
    <div id="wrap">
      <div className="wrap-inner">
        <div className="detail-wrap con-wrap">
          <div className="pd-wrap">
            <div className="pd-wrap-top">
              <div className="pd-img">
                {/* 슬라이드 */}
              </div>
              <div className="pd-info">
                <div className="tit-wrap">
                  <div className="main-tit">
                    <span>100% 순면소재 그물망 주머니</span>
                    <strong>{현재상품.title}</strong>
                  </div>
                  <div className="sub-tit">
                    <p>
                      과일, 야채, 소품 등을 담을 수 있는 도톰하고 부드러운100% 순면소재 그물 면주머니입니다. 과일, 야채, 소품 등을 담을 수 있는 도톰하고 부드러운100% 순면소재 그물 면주머니입니다.
                      {현재상품.content}
                      </p>
                  </div>
                </div>
                <div className="price-wrap">
                  <p className="pr-final"><span>{현재상품.price}</span>원</p>
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
                    dispatch(addItem({id: 현재상품.id, name: 현재상품.title, count: 1}))
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