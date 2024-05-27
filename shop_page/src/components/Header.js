import { Routes, Route, Link } from 'react-router-dom';
import '../assets/scss/components/header.scss'

function Header(){
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
              <div className="search-controls">검색</div>
          </div>
        </div>
        <div className="search-wrap">
          <div className="search-inp">
            <form action="submit">
              <input type="search" placeholder="검색어를 입력해 주세요" />
              <button type="submit" className="btn-search">검색</button>
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
            <button type="button">CLOSED</button>
          </div>
        </div>
          <div className="menu">
            <ul className="menu-list">
              <li><a href="#none">감탄상회 소개</a></li>
              <li><a href="#none">감탄스토어</a></li>
              <li><a href="#none">비건 케이터링</a></li>
              <li><a href="#none">감탄클래스</a></li>
              <li><a href="#none">캠페인</a></li>
              <li><a href="#none">커뮤니티</a></li>
            </ul>
          </div>
      </header>
    </>
  );
}

export default Header;