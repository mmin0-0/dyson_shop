import { useEffect, useState } from "react";
import '../assets/scss/layout/cart.scss';

function Cart(){
  return (
    <div id="wrap">   
      <div className="wrap-inner">
        <div className="tit-wrap">
          <div>
            <strong className="main-tit">장바구니</strong>
            <span className="state">0</span>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>장바구니 테이블</colgroup>
            <thead>
              <tr>
                <th>
                  <div className="flex-wrap">
                    <div class="input-wrap check">
                      <input id="allCheck" type="checkbox" name="basket" />
                      <label for="allCheck"></label>
                    </div>
                    <span className="txt">상품정보</span>
                  </div>
                </th>
                <th><span className="txt">수량</span></th>
                <th><span className="txt">주문금액</span></th>
                <th><span className="txt">배송정보</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex-wrap">
                    <div class="input-wrap check">
                      <input id="check_01" type="checkbox" name="basket" />
                      <label for="check_01"></label>
                    </div>
                    <div className="pd-wrap">
                      <div className="pd-info">
                        <div className="img-wrap">상품</div>
                        <p>[감탄] 어여쁜 어성초 비누 감탄-천연 수제 CP비누</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button type="button" className="increase">+</button>
                  <input />
                  <button type="button" className="decrease">-</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart;