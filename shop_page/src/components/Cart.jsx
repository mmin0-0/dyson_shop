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
                    <div class="input-wrap check">
                      <input id="allCheck" type="checkbox" name="basket" />
                      <label for="allCheck"></label>
                    </div>
                    <span className="txt">상품정보</span>
                  </div>
                </th>
                <th><span className="txt d-pc">수량</span></th>
                <th><span className="txt d-pc">주문금액</span></th>
                <th><span className="txt d-pc">배송정보</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="img">
                  <div className="flex-wrap pd-wrap">
                    <div class="input-wrap check">
                      <input id="check_01" type="checkbox" name="basket" />
                      <label for="check_01"></label>
                    </div>
                    <div className="pd-info">
                      <a href="#none">
                        <div className="img-wrap">상품</div>
                        <p>[감탄] 어여쁜 어성초 비누 감탄-천연 수제 CP비누</p>
                      </a>
                    </div>
                  </div>
                  <button type="button" className="btn-remove">제거</button>
                </td>
                <td className="hidden-sm">
                  <div className="info-list">
                    <div className="flex-wrap price">
                      <div className="tit txt-bold">주문금액</div>
                      <div className="cont txt-bold">6,000원</div>
                    </div>
                    <div className="result-list">
                      <div className="flex-wrap">
                        <div className="tit">상품금액(총<span>1</span>개)</div>
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
                  <div className="count-wrap">
                    <button type="button" className="increase">+</button>
                    <p className="count-num">0</p>
                    <button type="button" className="decrease">-</button>
                  </div>
                </td>
                <td className="hidden-lg">
                  <div className="price">
                    <p><span className="txt-bold">6,000</span> 원</p>
                  </div>
                </td>
                <td className="hidden-lg">
                  <p className="txt-bold">3,000 원</p>
                  <span>택배</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <section></section>
      </div>
    </div>
  )
}

export default Cart;