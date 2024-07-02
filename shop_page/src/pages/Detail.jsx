import { useEffect, useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import pdList from '../data.js';

function Detail(props){
  const {id} = useParams();
  const [product] = useState(pdList);
  const 현재상품 = props.product.find(function(e){
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
                          <span>{a.content}</span>
                          <strong>{a.title}</strong>
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

// function PdItem(props){
//   return (
   
//   )
// }

export default Detail;