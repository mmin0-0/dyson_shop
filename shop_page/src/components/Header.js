import { Routes, Route, Link } from 'react-router-dom';
import '../assets/scss/components/header.scss'

function Header(){
  return (
    <div className="header-wrap">
      <header>
        <div className="inner">
          <div className="logo">
            <a href="#none">
              <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`}   alt="감탄상회" />
            </a>
          </div>
          <div className="menu"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;