import { useEffect, useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom";

function Detail(props){
  const {id} = useParams();
  const 현재상품 = props.shoes.find(function(e){
    return e.id == id
  });

  return(
    <div id="wrap">
      <div className="wrap-inner">
        <div className="sub-visual">
          <div className="img-wrap">
          <img src={`${process.env.PUBLIC_URL}/images/main/sub_visual01.png`} alt="sub visual" />
          </div>
        </div>
        <div className="shop-cont con-box">
          <ul className="tab-cont">
            <li><a href="javascript:void(0)">세트상품</a></li>
            <li><a href="javascript:void(0)">욕실상품</a></li>
            <li><a href="javascript:void(0)">생활상품</a></li>
          </ul>
          <div className="item-container">
            {
              props.shoes.map((a,i)=>{
                return <PdItem key={i} shoes={props.shoes[i]}/>
              })
            }
          </div>
          <section></section>
        </div>
      </div>
    </div>
  )
}

function PdItem(props){
  return (
    <div className="shop-item">
      <Link to={`/detail/${props.shoes.id}`}>
        <div className="img-wrap">
          <img src="" alt="product_org" className="org-img" />
          <img src="" alt="product_hover" className="hover-img" />
        </div>
        <div className="item-info">
          <span>{props.shoes.content}</span>
          <strong>{props.shoes.title}</strong>
          <p><span>{props.shoes.price}</span>원</p>
        </div>
      </Link>
    </div>
  )
}

export default Detail;