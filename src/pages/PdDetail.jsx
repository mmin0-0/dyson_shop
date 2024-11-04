import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from '../store.js';
import { pdList, benefit, tabMenu } from '../data.js';
import { Link } from 'react-router-dom';
import { DefaultBtn } from "../components/Button";
import { HoverImgWrap, ImgWrap } from "../components/Image";
import { Strong, Span, P, TitInfo, TitWrap } from "../components/Text";

export default function PdDetail({ price }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id, dataId } = useParams();

  const 현재상품 = pdList.find(e => e.id === id);
  const 현재데이터 = 현재상품?.data.find(e => e.id.toString() === dataId)
  const [watchItem, setWatch] = useState([]);

  useEffect(() => {
    if (!현재데이터) return;

    const watchArr = JSON.parse(localStorage.getItem('watched')) || [];

    watchArr.push({
      category: 현재상품.id,
      id: 현재데이터.id,
      title: 현재데이터.title,
      content: 현재데이터.content,
      price: 현재데이터.price,
      img: 현재데이터.pdImg,
    });

    const uniqueWatchArr = Array.from(new Set(watchArr.map(item => item.id)))
      .map(id => watchArr.find(item => item.id === id))
      .slice(-6);

    localStorage.setItem('watched', JSON.stringify(uniqueWatchArr));
    setWatch(uniqueWatchArr);
  }, [현재데이터, 현재상품]);

  const option = [
    { tit: '원산지', info: '중국' },
    { tit: '구매혜택', info: '20 포인트 적립예정' },
    { tit: '배송비', info: '3,000원 (50,000원 이상 무료배송)' },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const selectMenuHandler = (index) => setCurrentTab(index);


  return (
    <div className="inner" id="pdDetail">
      <section id="pdInfo">
        <div className="cont-wrap">
          <div className="product-info con-box">
            <HoverImgWrap
              src={현재데이터.pdImg}
              alt={현재데이터.title}
              srcHover={현재데이터.hoImg}
              altHover={현재데이터.title}
            />
            <div className="info-txt">
              <div className="txt-wrap">
                <Span>{현재상품.title}</Span>
                <Strong fontSize="3.2rem" fontWeight="bold">{현재데이터.title}</Strong>
                <P>{현재데이터.content}</P>
              </div>
              <div className="price">
                <P className="pr-final" fontWeight="bold"><span>{price(현재데이터.price)}</span>원</P>
                <P className="pr-existing" fontWeight="bold"><span>1,000,000</span>원</P>
                <P className="pr-discount" fontWeight="bold">25%</P>
              </div>
              <div className="option">
                {
                  option.map((item, idx) =>
                    <div key={idx}>
                      <div className="tit">{item.tit}</div>
                      <div className="data">{item.info}</div>
                    </div>
                  )
                }
              </div>
              <div className="btn-wrap">
                <DefaultBtn className="zzim type01">찜하기</DefaultBtn>
                <DefaultBtn
                  className="cart"
                  onClick={() => {
                    dispatch(addItem({ category: 현재상품.id, id: 현재데이터.id, title: 현재데이터.title, price: 현재데이터.price, count: 1, img: 현재데이터.pdImg }))
                  }}
                >장바구니</DefaultBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pdDetail">
        <div className="cont-wrap">
          <div className="con-box">
            <TitWrap>
              <TitInfo tag="BUY FROM" tit="다이슨 공식몰 구매 혜택" />
              <Link to="#">카드사 특별 혜택 자세히 보기</Link>
            </TitWrap>
            <div className="list">
              {
                benefit.map((a, i) => {
                  return (
                    <div key={a.title}>
                      <Link to="#">
                        <div className="icon">
                          <img src={`${process.env.PUBLIC_URL}/images/icon/benefit0${i + 1}_icon.png`} alt="benefit icon" />
                        </div>
                        <div className="txt-info">
                          <Strong fontSize="2rem" fontWeight="600">{a.title}</Strong>
                        </div>
                        <div className="info">
                          <P>{a.content}</P>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <section id="pdChar">
        <div className="con-box">
          <TitWrap textAlign="center">
            <TitInfo tag="PRODUCT INFORMATION" tit="제품특징" />
            <P>엔지니어들은 창작에 대한 욕구와 더 나은 세상을 만들고자 하는 열망, 문제 해결의 필요성을 마음속에 항상 간직하고 있습니다.</P>
          </TitWrap>
          <div className="cont-wrap">
            <div className="list">
              {
                현재데이터.pdChar.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <ImgWrap src={`${process.env.PUBLIC_URL}/images/sub/pd_char/0${현재데이터.id}/0${idx}.jpg`} alt="제품특징" />
                      <div className="info">
                        <Strong fontSize="2rem" fontWeight="600">{item.tit}</Strong>
                        <P>{item.content}</P>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <section id="store">
        <div className="con-box">
          <TitWrap textAlign="center">
            <TitInfo tag="DEMO STORE" tit="다이슨 데모 스토어" />
            <P>다이슨 기술은 생활의 실제적인 문제를 해결하기 위해 설계되었습니다. <br className="d-pc" />그것을 이해하기 위한 가장 좋은 방법은 제품을 경험하는 것입니다. <br className="d-pc" />다이슨 데모 스토어는 제품을 직접 경험할 수 있는 공간입니다.</P>
          </TitWrap>
          <div className="cont-wrap">
            <div className="tab-menu">
              {
                tabMenu.map((item, idx) => (
                    <Link 
                      to="#"
                      key={idx}
                      className={idx === currentTab ? 'on':''}
                      onClick={() => selectMenuHandler(idx)}
                    >{idx + 1}</Link>
                ))
              }
            </div>
            <div className="tab-cont">
              <ImgWrap src={`${process.env.PUBLIC_URL}/images/sub/map_img0${currentTab + 1}.jpg`} alt="demo store map" />
              <div className="info">
                <Strong fontSize="1.8rem" fontWeight="600">{tabMenu[currentTab].tit}</Strong>
                <div className="txt-wrap">
                  <P fontSize="1.8rem"><span>주소: </span>{tabMenu[currentTab].address}</P>
                  <P fontSize="1.8rem"><span>영업시간: </span>{tabMenu[currentTab].content}</P>
                  <Link to="#">시연 서비스 예약하기</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}