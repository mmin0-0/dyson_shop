import { useState } from "react";
import { Link } from "react-router-dom";
import { pdList } from '../data.js';
import Pagination from "../components/Pagination";
import { ImgWrap, HoverImgWrap } from "../components/Image";
import { Strong, P, Span } from '../components/Text';

function Detail({ price }) {
  const [selectCategory, setSelectCategory] = useState('all');
  const categoryClick = (categoryId) => {
    setSelectCategory(categoryId);
  };

  return (
    <div className="inner detail">
      <section id="visual">
        <ImgWrap src={`${process.env.PUBLIC_URL}/images/main/sub_visual01.png`} alt="visual" />
        <div className="tit-wrap">
          <Strong fontSize="3.2rem" fontWeight="bold">Dyson's Product</Strong>
          <P>다이슨 스토어에서 다이슨 제품을 경험해 보세요.</P>
        </div>
      </section>
      <section id="productList">
        <div className="cont-wrap">
          <ul className="tab-cont con-box">
            {[
              { id: 'all', title: 'All' },
              ...pdList
            ].map((category) => (
              <li
                key={category.id}
                className={selectCategory === category.id ? 'on' : ''}
                onClick={() => categoryClick(category.id)}
              ><Link to="#">{category.title}</Link></li>
            ))}
          </ul>
          <div className="product-list">
          {
            pdList.map((category) => (
              category.id === selectCategory || selectCategory === 'all' ?
                category.data.map((item) => (
                  <div className="item" key={`${item.id}`}>
                    <Link to={`/detail/${category.id}/${item.id}`}>
                      <HoverImgWrap
                        src={item.pdImg}
                        alt="product"
                        srcHover={item.hoImg}
                        altHover="product"
                      />
                      <div className="info">
                        <Strong>{item.title}</Strong>
                        <Span>{item.content}</Span>
                        <P><span>{price(item.price)}</span>원</P>
                      </div>
                    </Link>
                  </div>
                ))
                : null
            ))
          }
        </div>
        {/* <Pagination /> */}
        </div>
      </section>
    </div>
  )
}

export default Detail;