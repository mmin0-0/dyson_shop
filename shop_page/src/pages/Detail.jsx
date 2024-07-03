import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import pdList from '../data.js';

function Detail(){
  const { id, dataId } = useParams();
  const [product, setProduct] = useState();
  const [currentData, SetCurrentData] = useState();

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
            <li className="on"><a href="javascript:void(0)">All</a></li>
            {
              pdList.map((a, i)=>{
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
              pdList.map((product) => (
                product.data.map((item) => (
                  <div className="shop-item" key={`${product.id}-${item.id}`}>
                    <Link to={`/detail/${product.id}/${item.id}`}>
                      <div className="img-wrap">
                        <img src={item.pdImg} alt="product_org" className="org-img" />
                        <img src="" alt="product_hover" className="hover-img" />
                      </div>
                      <div className="item-info">
                        <strong>{item.title}</strong>
                        <span>{item.content}</span>
                        <p><span>{item.price}</span>원</p>
                      </div>
                    </Link>
                  </div>
                ))
              ))
            }
    </div>
          <section></section>
        </div>
      </div>
    </div>
  )
}

export default Detail;