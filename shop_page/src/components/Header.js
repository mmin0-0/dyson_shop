import { Routes, Route, Link } from 'react-router-dom';
import '../assets/scss/components/header.scss'
import { useEffect, useState } from 'react';

function Header(){
  let [search, setSearch] = useState(false);
  let toggleSearch = ()=>{setSearch(!search);};

  useEffect(()=>{})
  return (
    <>
      <header>
        <div className="hd-inner-wrap">
          <div className="logo">
              <a href="#none">
                <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`}   alt="감탄상회" />
              </a>
          </div>
          <div className="utility-wrap">
              <div className="user">
                유저
                <i class="fa-sharp fa-solid fa-basket-shopping-simple"></i>
              </div>
              <div className="search-controls" onClick={toggleSearch}>검색</div>
          </div>
        </div>
        <div className={`search-wrap ${search ? 'active' : 'closed'}`}>
          <div className="search-inner">
            <div className="search-inp">
              <form action="submit">
                <div className="input-wrap">
                  <label for="searchWrap" className="hide">검색</label>
                  <input type="search" id="searchWrap" placeholder="검색어를 입력해 주세요" />
                  <button type="submit" className="btn-search">검색</button>
                </div>
              </form>
            </div>
            <div className="search-keyword">
              <strong>추천검색어</strong>
              <ul>
                <li><a href="#none">lorem</a></li>
                <li><a href="#none">lorem</a></li>
                <li><a href="#none">lorem</a></li>
                <li><a href="#none">lorem</a></li>
                <li><a href="#none">lorem</a></li>
              </ul>
            </div>
            <div className="btn-closed">
              <button type="button" onClick={toggleSearch}>CLOSED</button>
            </div>
          </div>
        </div>
        <nav className="gnb-wrap">
          <ul className="gnb-inner">
            <li>
              <a href="#none" className="depth1">감탄상회 소개</a>
              <div className="gnb-draw">
                <div className="draw-inner">
                  <div className="menu-list">
                    <ul>
                      <li><a href="#none">브랜드</a></li>
                      <li><a href="#none">감탄 스토리</a></li>
                      <li><a href="#none">비전</a></li>
                      <li><a href="#none">활동가 소개</a></li>
                    </ul>
                  </div>
                  <div className="banner">배너</div>
                </div>
              </div>
            </li>
            <li>
              <a href="#none" className="depth1">감탄스토어</a>
              <div className="gnb-draw">
                <div className="draw-inner">
                  <div className="menu-list">
                    <ul>
                      <li><a href="#none">세트상품</a></li>
                      <li><a href="#none">욕실용품</a></li>
                      <li><a href="#none">생활용품</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#none" className="depth1">비건 케이터링</a>
              <div className="gnb-draw">
                <div className="draw-inner">
                  <div className="menu-list">
                    <ul><li><a href="#none">비건이란?</a></li></ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#none" className="depth1">감탄클래스</a>
              <div className="gnb-draw">
                <div className="draw-inner">
                  <div className="menu-list">
                    <ul>
                      <li><a href="#none">원데이 클래스</a></li>
                      <li><a href="#none">환경생태 프로그램</a></li>
                      <li><a href="#none">찾아가는 환경교육</a></li>
                      <li><a href="#none">골목 반상회</a></li>
                      <li><a href="#none">대관/커뮤니티 신청</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#none" className="depth1">캠페인</a></li>
            <li>
              <a href="#none" className="depth1">커뮤니티</a>
              <div className="gnb-draw">
                <div className="draw-inner">
                  <div className="menu-list">
                    <ul>
                      <li><a href="#none">공지사항</a></li>
                      <li><a href="#none">자주 묻는 질문</a></li>
                      <li><a href="#none">Q&A</a></li>
                      <li><a href="#none">고객후기</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;