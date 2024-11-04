import { useRef } from "react";
import { Link } from "react-router-dom";
import useGsapAnimations from '../hook/useGsapAnimations';
import { TitWrap, TitInfo, InfoTxt, P, Strong } from "../components/Text";
import { ImgWrap, HoverImgWrap } from "../components/Image";
import { aboutInfo, haveCont } from '../mainData.js';
import { MainVisual, ProductList, VacuumList } from "../components/Swiper.jsx";
import { MoreBtn } from "../components/Button";

export default function Home() {
  const boxRef = useRef(null);
  useGsapAnimations(boxRef);

  return (
    <div className="inner" id="home" ref={boxRef}>
      <section id="visual"><MainVisual /></section>
      <section id="about">
        <div className="con-box">
          <TitWrap type="type01">
            <TitInfo tag="About us" tit={
              <>More, <br className="d-pc" /><span>With less</span></>
            } />
            <InfoTxt className="d-pc">
              <P>{aboutInfo}</P>
            </InfoTxt>
          </TitWrap>
          <div className="cont-wrap">
            <ImgWrap
              src={`${process.env.PUBLIC_URL}/images/main/about_bg.jpg`}
              alt="brand"
            />
            <InfoTxt className="d-mb">
              <P>{aboutInfo}</P>
            </InfoTxt>
          </div>
        </div>
      </section>
      <section id="product">
        <div className="con-box">
          <TitWrap>
            <TitInfo tag="best product" tit="베스트 제품" />
            <Link to="/detail" className="more">More</ Link>
            <div className="controls">
        <button className="swiper-button-prev">이전</button>
        <button className="swiper-button-next">다음</button>
      </div>
          </TitWrap>
          <div className="cont-wrap">
            <ProductList />
          </div>
        </div>
      </section>
      <section id="brandPr">
        <div className="cont-wrap">
          <div className="brand-pr">
            {
              [1, 2].map((num) =>
                <div className={`txt0${num}`} key={num}>
                  <img src={`${process.env.PUBLIC_URL}/images/main/tit0${num}_img.png`} alt="pr text" />
                </div>
              )
            }
          </div>
        </div>
      </section>
      <section id="vacuum"><VacuumList /></section>
      <section id="fixContent">
        <TitWrap>
          <span className="tit-txt">MUST</span>
          <span className="icon-box">
            <img src={`${process.env.PUBLIC_URL}/images/icon/more_icon.png`} alt="dyson" />
          </span>
          <span className="tit-txt">HAVE</span>
        </TitWrap>
        <div className="cont-wrap con-box">
          <ul className="product-list">
            {
              haveCont.map((a, i) => {
                return (
                  <li key={a.title}>
                    <Link to="#">
                      <HoverImgWrap
                        src={`${process.env.PUBLIC_URL}/images/main/must0${i + 1}_img.jpg`}
                        alt="product img"
                        srcHover={`${process.env.PUBLIC_URL}/images/main/must0${i + 1}_on_img.jpg`}
                        altHover="product img"
                      />
                      <div className="txt-wrap">
                        <P fontWeight="500">{a.title}</P>
                        <Strong fontWeight="bold" fontSize="1.6rem">{a.content}</Strong>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <MoreBtn text="VIEW MORE" />
        </div>
      </section>
    </div>
  )
}