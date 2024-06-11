import { useEffect, useState } from "react";

function CartOption({ isOpen, onClose, children }){
  return isOpen ? (
    <div className="modal">
    <div className="modal-cont">
      <div className="modal-tit">
        <strong>옵션변경</strong>
        <a href="javascript:void(0)" className="md-closed">닫기</a>
      </div>
      <div className="modal-info">
        <div className="inner">
          <div className="pd-item">
            <div className="img-wrap">상품</div>
            <p>[감탄] 어여쁜 어성초 비누 감탄-천연 수제 CP비</p>
          </div>
          <div className="pd-payment">
            <div className="opt-num">
              <strong className="tit">수량</strong>
              <div className="tools">
                <a href="javascript:void(0)" className="decrease">-</a>
                <input type="text" value="1" className="num-form" />
                <a href="javascript:void(0)" className="increase">+</a>
              </div>
            </div>
            <div className="opt-total">
              <div className="tit">총 수량 <span>1</span> 개</div>
              <div className="total-price"><span>18,000</span>원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-btn">
        <button type="button" className="cancel">취소</button>
        <button type="button" className="order type01">변경</button>
      </div>
    </div>
    </div>
  ) : null;
}

function Popup(){
  return (
    <>
      <p>하이 팝업</p>
    </>
  )
}

export { CartOption, Popup }