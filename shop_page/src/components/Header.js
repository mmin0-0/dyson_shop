import { Routes, Route, Link } from 'react-router-dom';
import '../assets/scss/components/header.scss'

function Header(){
  return (
    <div className="header-wrap">
      <header>
        <div className="con-box">
          <div className="hd-top">
            <div className="logo">
              <a href="#none">
                <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`}   alt="감탄상회" />
              </a>
            </div>
            <div className="side-menu">
              <div className="search-wrap">
                <input type="search" placeholder="검색어를 입력해주세요." />
              </div>
              <div className="user">
              <i class="fa-sharp fa-solid fa-basket-shopping-simple"></i>
              </div>
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
        </div>
      </header>
    </div>
  );
}

export default Header;