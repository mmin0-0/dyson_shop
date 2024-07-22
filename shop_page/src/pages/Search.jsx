import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { menuItems, keyword, pdList, benefit, tabMenu } from '../data.js';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function Search({price}){
  const query = useQuery();
  const searchQuery = query.get('q');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const results = [];
      pdList.forEach(category => {
        category.data.forEach(product => {
          if(product.title.includes(searchQuery) || product.content.includes(searchQuery)){
            results.push({...product, categoryId: category.id});
          }
        });
      });
      setProducts(results);
    }
  }, []);
  
  return(
    <div id="wrap" className="search">
      <div className="wrap-inner">
        <div className="result-info con-box">
          <div className="tit-wrap">
            <strong><span>"{searchQuery}"</span> 에 대한 검색결과</strong>
          </div>
          <div className="con-wrap">
            <div className="result-wrap">
              {
                products.length > 0 ? (
                <ul className="result-list">
                  {
                    products.map(product => (
                      <li key={product.id}>
                        <a href={`/detail/${product.categoryId}/${product.id}`}>
                          <div className="img-wrap">
                            <img src={product.pdImg} alt="product img"  className="org-img"/>
                            <img src={product.hoImg} alt="product img" className="hover-img" />
                          </div>
                          <div className="item-info">
                            <strong>{product.title}</strong>
                            <span>{product.content}</span>
                            <p><span>{price(product.price)}</span>원</p>
                          </div>
                        </a>
                      </li>
                    ))
                  }
                </ul>
                ) : (
                  <div className="empty">
                  <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/images/icon/result_empty_icon.svg`} alt="result" />
                  </div>
                  <div className="empty-info">
                    <p>일치하는 검색결과가 없습니다.</p>
                    <div className="empty-list">
                      <strong>제안 :</strong>
                      <ul>
                        <li>모든 단어의 철자가 정확한지 확인하세요.</li>
                        <li>다른 검색어를 사용해 보세요.</li>
                        <li>더 일반적인 검색어를 사용해 보세요.</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                )
              }
            </div>
            <div className="product-list">
              <div className="tit-wrap">
                <strong>카테고리 둘러보기</strong>
              </div>
              <div className="con-wrap">
                <ul>
                  {
                    pdList.map(item => (
                      <li key={item.id}>
                        <a href="/detail">
                          <div className="img-wrap">
                            <img src={item.mainImg} alt="category" />
                          </div>
                          <div className="txt-info">
                            <strong>{item.title}</strong>
                          </div>
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  )
}

function Contact(){
  return(
    <div className="contact-wrap">
      <div className="con-box">
        <div className="tit-wrap">
          <strong>문의 연락처</strong>
          <span>운영시간: 월-금 오전 9시-오후 6시</span>
        </div>
        <div className="con-wrap">
          <ul>
            <li>
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/images/icon/tel_icon.png`} alt="contact tel" />
              </div>
              <div className="info">
                <strong>전화문의</strong>
                <p>
                  <a href="tel: 1588-4253">1588-4253</a> / <a href="tel: 080-300-4253">080-300-4253</a>
                  (수신자부담)
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/images/icon/email_icon.png`} alt="contact email" />
              </div>
              <div className="info">
                <strong>이메일</strong>
                <p>
                  <a href="mailto: help@kr.dyson.com">help@kr.dyson.com</a>
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/images/icon/kakao_icon.png`} alt="contact kakao" />
              </div>
              <div className="info">
                <strong>카카오톡 상담</strong>
                <p>
                  <a href="https://www.register-dyson.co.kr/kakao/index.html">상담하기</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Search;