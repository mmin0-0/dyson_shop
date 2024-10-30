import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { pdList } from '../data.js';
import { TitWrap, Strong, P, Span, Ul } from "../components/Text.jsx";
import { HoverImgWrap } from "../components/Image.jsx";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search({ price }) {
  const query = useQuery();
  const searchQuery = query.get('q');
  const [products, setProducts] = useState([]);
  const emptyTxt = ['모든 단어의 철자가 정확한지 확인하세요.', '다른 검색어를 사용해 보세요.', '더 일반적인 검색어를 사용해 보세요.'];

  const contact = [
    {
      icon: `${process.env.PUBLIC_URL}/images/icon/tel_icon.png`,
      title: "전화문의",
      content: (
        <>
          <a href="tel:1588-4253">1588-4253</a> / <a href="tel:080-300-4253">080-300-4253</a> (수신자부담)
        </>
      ),
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/icon/email_icon.png`,
      title: "이메일",
      content: <a href="mailto:help@kr.dyson.com">help@kr.dyson.com</a>,
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/icon/kakao_icon.png`,
      title: "카카오톡 상담",
      content: <a href="https://www.register-dyson.co.kr/kakao/index.html">상담하기</a>,
    },
  ];

  useEffect(() => {
    if (searchQuery) {
      const results = [];
      pdList.forEach(category => {
        category.data.forEach(product => {
          if (product.title.includes(searchQuery) || product.content.includes(searchQuery)) {
            results.push({ ...product, categoryId: category.id });
          }
        });
      });
      setProducts(results);
    }
  }, []);

  return (
    <div className="inner con-box" id="search">
      <section id="result">
        <TitWrap>
          <Strong fontSize="3.2rem"><span>"{searchQuery}"</span> 에 대한 검색결과</Strong>
        </TitWrap>
        <div className="cont-wrap">
          <div className="result">
            {
              products.length > 0 ? (
                <div className="result-list">
                  {
                    products.map(product => (
                      <div key={product.id}>
                        <Link to={`/detail/${product.categoryId}/${product.id}`}>
                          <HoverImgWrap
                            src={product.pdImg}
                            alt="product"
                            srcHover={product.hoImg}
                            altHover="product"
                          />
                          <div className="info">
                            <Strong>{product.title}</Strong>
                            <Span>{product.content}</Span>
                            <P fontWeight="500"><span>{price(product.price)}</span>원</P>
                          </div>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              ) : (
                <div className="result-empty">
                  <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/images/icon/result_empty_icon.svg`} alt="result" />
                  </div>
                  <div className="info">
                    <P fontSize="2.4rem">일치하는 검색결과가 없습니다.</P>
                    <div className="list">
                      <Strong fontSize="2rem" fontWeight="600">제안 :</Strong>
                      <Ul items={emptyTxt} />
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
      <section id="category">
        <TitWrap>
          <Strong fontSize="2rem" fontWeight="600">카테고리 둘러보기</Strong>
        </TitWrap>
        <div className="cont-wrap">
          <div className="list">
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
      </section>
      <section id="contact">
        <TitWrap>
          <Strong fontSize="2rem" fontWeight="600">문의 연락처</Strong>
          <Span>운영시간: 월-금 오전 9시-오후 6시</Span>
        </TitWrap>
        <div className="cont-wrap">
          <div className="list">
            <ul>
              {contact.map((method, index) => (
                <li key={index}>
                  <div className="icon">
                    <img src={method.icon} alt={`contact ${method.title}`} />
                  </div>
                  <div className="info">
                    <Strong>{method.title}</Strong>
                    <P fontWeight="bold">{method.content}</P>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}