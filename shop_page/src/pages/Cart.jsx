import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { CartOption, Popup } from '../components/Modal';
import { increase, decrease, addItem } from '../store.js';

function Cart({price}){
  const state = useSelector((state)=>state);
  const dispatch = useDispatch();

  const totalPrice = ()=>{
    return state.cart.reduce((total, item) => total + item.count * item.price, 0);
  }

  return (
    <div id="wrap" className="cart">   
      <div className="wrap-inner con-box">
        <div className="board-tit">
          <div className="tit-wrap">
            <div>
              <strong className="main-tit">장바구니</strong>
              <span className="state">{state.cart.length}</span>
            </div>
          </div>
        </div>
        <div className="cont-wrap">
          <CartTable 
            cart={state.cart}
            dispatch={dispatch}
            totalPrice={totalPrice} 
          />
          <ResultTable 
            cart={state.cart}
            dispatch={dispatch}
            totalPrice={totalPrice} 
          />
          <div className="bottom-btn">
            <button type="button" className="btn-order">주문하기</button>
            <Link to="/detail">계속 쇼핑하기</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function CartTable({cart, dispatch, totalPrice}){
  // const state = useSelector((state)=>state);
  // const dispatch = useDispatch();

  const tbodyRef = useRef();
  const [hasRows, setHasRows] = useState(cart.length > 0);
  const childRows = ()=>{
    if(tbodyRef.current){
      setHasRows(tbodyRef.current.querySelectorAll('tr').length > 0);
    }
  };

  useEffect(()=>{
    childRows();
  }, []);

  const remove = (e)=>{
    const row = e.target.closest('tr');
    if(row){
      row.remove();
      childRows();
    }
  };

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
        <tbody ref={tbodyRef}>
          {
            cart.map((a,i)=>
              <tr id={a.id} key={i}>
                <td className="img">
                  <div className="flex-wrap pd-wrap">
                    <div className="input-wrap check">
                      <input id={`check_0${i}`} type="checkbox" name="basket" />
                      <label htmlFor={`check_0${i}`}></label>
                    </div>
                    <div className="pd-info">
                      <a href={`detail/${a.category}/${a.id}`}>
                        <div className="img-wrap">
                          <img src={a.img} alt="product img" />
                        </div>
                        <p>{a.title}</p>
                      </a>
                    </div>
                  </div>
                  <a href="javascript:void(0)" className="btn-remove" onClick={remove}>제거</a>
                </td>
                <td className="hidden-sm">
                  <div className="info-list">
                    <div className="amount">
                      <button type="button" className="decrease" onClick={()=>{dispatch(decrease(a.id))}}>-</button>
                      <div className="tit txt-bold">{a.count}</div>
                      <button type="button" className="increase" onClick={()=>{dispatch(increase(a.id))}}>+</button>
                    </div>
                    <div className="flex-wrap price">
                      <div className="tit txt-bold">주문금액</div>
                      <div className="cont txt-bold">6,000원</div>
                    </div>
                    <div className="result-list">
                      <div className="flex-wrap">
                        <div className="tit">상품금액(총 <span>{a.count}</span>개)</ div>
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
                    <button type="button" className="decrease" onClick={()=>{dispatch(decrease(a.id))}}>-</button>
                    <div className="tit txt-bold">{a.count}</div>
                    <button type="button" className="increase" onClick={()=>{dispatch(increase(a.id))}}>+</button>
                  </div>
                </td>
                <td className="hidden-lg">
                  <div className="price">
                    <p className="tit"><span className="txt-bold">{(a.count * a.price).toLocaleString()}</span> 원</p>
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
      {!hasRows && <div className="empty">항목이 없습니다.</div>}
    </div>
  )
}

function ResultTable({cart, dispatch, totalPrice}){
  const totalExtra = totalPrice() + 3000;

  return (
    <div className="table-wrap">
      <table className="shop-result-table">
        <caption>장바구니 합계 테이블</caption>
        <colgroup>
          <col width="*"></col>
        </colgroup>
        <thead>
          <tr>
            <th className="hidden-lg"><p className="txt">총 주문 상품 <span>{cart.length}</span>개</p></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="price-wrap">
                <div className="price-item">
                  <p><span>{totalPrice().toLocaleString()}</span>원</p>
                  <span>상품금액</span>
                </div>
                <div className="price-item">
                  <p>3,000원</p>
                  <span>배송비</span>
                </div>
                <div className="price-item">
                  <p><span>{totalExtra.toLocaleString()}</span>원</p>
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