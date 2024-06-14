import { useEffect, useState } from "react";
import '../assets/scss/layout/detail.scss';

function Detail(props){
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
                    <strong>[감탄] 그물면주머니 프로듀스백 3종</strong>
                  </div>
                  <div className="sub-tit">
                    <p>과일, 야채, 소품 등을 담을 수 있는 도톰하고 부드러운100% 순면소재 그물 면주머니입니다. 과일, 야채, 소품 등을 담을 수 있는 도톰하고 부드러운100% 순면소재 그물 면주머니입니다.</p>
                  </div>
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

export default Detail;