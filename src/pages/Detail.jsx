import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { pdList } from '../data.js';
import Pagination from "../components/Pagination";

function Detail({ price }) {
  const [selectCategory, setSelectCategory] = useState('all');
  const categoryClick = (categoryId) => {
    setSelectCategory(categoryId);
  };

  return (
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
        <div className="shop-cont">
          <ul className="tab-cont con-box">
            {[
              { id: 'all', title: 'All' },
              ...pdList
            ].map((category) => (
              <li
                key={category.id}
                className={selectCategory === category.id ? 'on' : ''}
                onClick={() => categoryClick(category.id)}
              >
                <Link to="#">{category.title}</Link>
              </li>
            ))}
          </ul>
          <div className="item-container">
            {
              pdList.map((category) => (
                category.id === selectCategory || selectCategory === 'all' ?
                  category.data.map((item) => (
                    <div className="shop-item" key={`${item.id}`}>
                      <Link to={`/detail/${category.id}/${item.id}`}>
                        <div className="img-wrap">
                          <img src={item.pdImg} alt="product_org" className="org-img" />
                          <img src={item.hoImg} alt="product_hover" className="hover-img" />
                        </div>
                        <div className="item-info">
                          <strong>{item.title}</strong>
                          <span>{item.content}</span>
                          <p><span>{price(item.price)}</span>원</p>
                        </div>
                      </Link>
                    </div>
                  ))
                  : null
              ))
            }
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Detail;