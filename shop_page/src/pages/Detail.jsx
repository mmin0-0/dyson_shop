import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import pdList from '../data.js';

function Detail(){
  const { id, dataId } = useParams();
  const [product] = useState(pdList);
  const 현재상품 = product.find(function(e){
    return e.id == id
  });
  const 현재데이터 = 현재상품.data.find(function(e){
    return e.id.toString() == dataId
  });

  return(
    <div id="wrap">
      <div className="wrap-inner">
        <div className="sub-visual">
          <div className="img-wrap">
            <img src={`${process.env.PUBLIC_URL}/images/main/sub_visual01.png`} alt="sub visual" />
          </div>
          <div className="tit-wrap">
            <strong>Dyson's Product</strong>
            <p>다이슨 스토어에서 다이슨 제품을 경험해 보세요.</p>
          </div>
        </div>
        <div className="shop-cont con-box">
          <ul className="tab-cont">
            {
              product.map((a, i)=>{
                return (
                  <li key={i}>
                    <a href="javascript:void(0)">{a.title}</a>
                  </li>
                )
              })
            }
          </ul>
          <div className="item-container">
              {
                product.map((a, i)=>{
                  return (
                    <div className="shop-item" key={i}>
                      <Link to={`/detail/${a.id}`}>
                        <div className="img-wrap">
                          <img src="" alt="product_org" className="org-img" />
                          <img src="" alt="product_hover" className="hover-img" />
                        </div>
                        <div className="item-info">
                          <strong>{a.title}</strong>
                          <span>{a.content}</span>
                          <p><span>{a.price}</span>원</p>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
          </div>
          <section></section>
        </div>
      </div>
    </div>
  )
}

export default Detail;