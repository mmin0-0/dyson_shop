import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
// import '../assets/scss/layout/detail.scss';

function Detail(props){
  const {id} = useParams();
  const 현재상품 = props.shoes.find(function(e){
    return e.id == id
  });

  return(
    <div id="wrap">
      <div className="wrap-inner">
        <div className="visual">서브페이지 비쥬얼</div>
        <div className="cont-wrap">

        </div>
      </div>
    </div>
  )
}

export default Detail;