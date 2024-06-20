import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { CartOption, Popup } from '../components/Modal';
import { increase, decrease, addItem } from '../store.js';

function Cart(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  let state = useSelector((state) => state );
  let dispatch = useDispatch();

  return (
    <div id="wrap">   
      <div className="wrap-inner con-box">
        <div className="board-tit">
          <div className="tit-wrap">
            <div>
              <strong className="main-tit">장바구니</strong>
              <span className="state">0</span>
            </div>
          </div>
        </div>
        <div className="cont-wrap">
          <CartTable />
          <ResultTable />
          <div className="bottom-btn">
            <button type="button" className="btn-order">주문하기</button>
            <Link to="/Home">계속 쇼핑하기</Link>
          </div>
        </div>
      </div>
      {/* <div className="modal">
        <CartOption />
      </div> */}
      <div onClick={openModal}>열기</div>
      <CartOption isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

function CartTable({toggleModal}){
  let state = useSelector((state)=>state);
  let dispatch = useDispatch();

  return (
    <div className="table-wrap">
      <table className="shop-table">
        <caption>장바구니 테이블</caption>
        <colgroup>
          <col width="*"></col>
          <col width="180px"></col>
          <col width="180px"></col>
          <col width="180px"></col>
        </colgroup>
        <thead>
          <tr>
            <th>
              <div className="flex-wrap center">
                <div className="input-wrap check">
                  <input id="allCheck" type="checkbox" name="basket" />
                  <label htmlFor="allCheck"></label>
                </div>
                <span className="txt">전체선택</span>
              </div>
            </th>
            <th><span className="txt d-pc">수량</span></th>
            <th><span className="txt d-pc">주문금액</span></th>
            <th><span className="txt d-pc">배송정보</span></th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a,i)=>
              <tr id={state.cart[i].id} key={i}>
                <td className="img">
                  <div className="flex-wrap pd-wrap">
                    <div className="input-wrap check">
                      <input id="check_01" type="checkbox" name="basket" />
                      <label htmlFor="check_01"></label>
                    </div>
                    <div className="pd-info">
                      <a href="#none">
                        <div className="img-wrap">상품</div>
                        <p>{state.cart[i].name}</p>
                      </a>
                    </div>
                  </div>
                  <a href="#none" className="btn-remove">제거</a>
                </td>
                <td className="hidden-sm">
                  <div className="info-list">
                    <div className="amount">
                      <button type="button" className="decrease" onClick={()=>{dispatch(decrease(state.cart[i].id))}}>-</button>
                      <div className="tit txt-bold">{state.cart[i].count}</div>
                      <button type="button" className="increase" onClick={()=>{dispatch(increase(state.cart[i].id))}}>+</button>
                    </div>
                    <div className="flex-wrap price">
                      <div className="tit txt-bold">주문금액</div>
                      <div className="cont txt-bold">6,000원</div>
                    </div>
                    <div className="result-list">
                      <div className="flex-wrap">
                        <div className="tit">상품금액(총 <span>{state.cart[i].count}</span>개)</ div>
                        <div className="cont"><span>6,000</span>원</div>
                      </div>
                      <div className="flex-wrap">
                        <div className="tit">배송비</div>
                        <div className="cont"><span>3,000</span>원</div>
                      </div>
                      <div className="flex-wrap">
                        <div className="tit">배송수단</div>
                        <div className="cont">택배</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden-lg">
                  <div className="amount">
                    <button type="button" className="decrease">-</button>
                    <div className="tit txt-bold">{state.cart[i].count}</div>
                    <button type="button" className="increase" onClick={()=>{dispatch(increase(state.cart[i].id))}}>+</button>
                  </div>
                </td>
                <td className="hidden-lg">
                  <div className="price">
                    <p className="tit"><span className="txt-bold">000</span> 원</p>
                    <div className="btn-wrap">
                      <button type="button"className="order-option type02">바로구매</button>
                    </div>
                  </div>
                </td>
                <td className="hidden-sm">
                  <div className="btn-wrap">
                    <button type="button" className="order-option">바로구매</button>
                  </div>
                </td>
                <td className="hidden-lg">
                  <p className="txt-bold">3,000 원</p>
                  <span>택배</span>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

function ResultTable(){
  return (
    <div className="table-wrap">
      <table className="shop-result-table">
        <caption>장바구니 합계 테이블</caption>
        <colgroup>
          <col width="*"></col>
        </colgroup>
        <thead>
          <tr>
            <th className="hidden-lg"><p className="txt">총 주문 상품 <span>1</span>개</p></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="price-wrap">
                <div className="price-item">
                  <p><span>28,000</span>원</p>
                  <span>상품금액</span>
                </div>
                <div className="price-item">
                  <p>3,000원</p>
                  <span>배송비</span>
                </div>
                <div className="price-item">
                  <p><span>31,000</span>원</p>
                  <span>총 주문금액</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Cart;