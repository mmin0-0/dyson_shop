import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

function Detail(props){
  const {id} = useParams();
  const 현재상품 = props.shoes.find(function(e){
    return e.id == id
  });

  return(
    <div id="wrap">
      <div className="wrap-inner">
        <div className="sub-visual">서브페이지 비쥬얼</div>
        <div className="shop-cont con-box">
          <ul className="tab-cont">
            <li><a href="javascript:void(0)">세트상품</a></li>
            <li><a href="javascript:void(0)">욕실상품</a></li>
            <li><a href="javascript:void(0)">생활상품</a></li>
          </ul>
          <div className="item-container">
            <div className="shop-item">
              <a href="javascript:void(0)">
                <div className="img-wrap">
                  <img src="" alt="product_org" className="org-img" />
                  <img src="" alt="product_hover" className="hover-img" />
                </div>
                <div className="item-info">
                  <span>생활용품</span>
                  <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, soluta.</strong>
                  <p><span>12000</span>원</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;