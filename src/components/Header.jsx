import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useMediaContext } from '../MediaContext';
import { menuItems, keyword } from '../data.js';
import { DefaultBtn } from './Button';
import { DefaultInput } from './Input';
import { Strong, Ul } from './Text';

export default function Header({ toggleModal }) {
  const [headerClass, setHeaderClass] = useState('');
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const { isTablet } = useMediaContext();

  useEffect(() => {
    const handleScroll = () => setHeaderClass(window.scrollY > 0 ? 'fixed' : '');

    if (isTablet) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTablet]);

  const toggleSearch = (e) => {
    setSearch(!search);
    e.target.classList.toggle('on', !search);
  };

  const toggleMenu = () => setMenu((prev) => !prev);

  const utilityItems = [
    { className: 'user', text: '로그인', onClick: toggleModal, link: null },
    { className: 'basket', text: '장바구니', onClick: null, link: '/cart' },
    { className: 'search-controls', text: '검색', onClick: toggleSearch, link: null }
  ];

  return (
    <header className={headerClass}>
      <div className="inner">
        <DefaultBtn className="ham-btn" onClick={toggleMenu}>menu open</DefaultBtn>
        <div className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="dyson" />
          </Link>
        </div>
        <div className="util-wrap">
          {
            utilityItems.map((item) =>
              <Link
                to={item.link}
                key={item.text}
                className={item.className}
                onClick={item.onClick}
              >{item.text}</Link>
            )
          }
        </div>
      </div>
      <SearchWrap toggleSearch={toggleSearch} search={search} />
      <NavWrap menu={menu} toggleMenu={toggleMenu} utilityItems={utilityItems}/>
    </header>
  );
}

function SearchWrap({ toggleSearch, search }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const formSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <>
      <div className={`search-wrap ${search ? 'active' : 'closed'}`}>
        <div className="search-inner">
          <div className="search-inp">
            <form onSubmit={formSubmit}>
              <DefaultInput
                inputType="search"
                txt="검색"
                id="searchWrap"
                placeholder="검색어를 입력해 주세요."
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </form>
          </div>
          <div className="keyword">
            <Strong fontWeight="600">추천검색어</Strong>
            <Ul items={keyword} />
          </div>
          <DefaultBtn className="btn-closed" onClick={toggleSearch}>CLOSED</DefaultBtn>
        </div>
      </div>
    </>
  )
}

function NavWrap({ menu, toggleMenu, utilityItems }) {
  return (
    <>
      <nav className={`gnb-wrap ${menu ? 'active' : ''}`}>
        <div className="fix-logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="dyson" />
          </Link>
        </div>
        <div className="gnb-wrap-top">
          <DefaultBtn className="btn-closed" onClick={toggleMenu}>CLOSED</DefaultBtn>
          <div className="util-wrap">
            {
              utilityItems
                .filter(item => item.text === '로그인' || item.text === '장바구니')
                .map(item => (
                  <Link
                    to={item.link}
                    key={item.text}
                    className={item.className}
                    onClick={item.onClick}
                  >{item.text}</Link>
                ))
            }
          </div>
        </div>
        <GnbMenu />
      </nav>
    </>
  )
}

function GnbMenu({ isTabletOrSmaller: isTablet }) {
  const [hovered, setHovered] = useState(null);
  const parentRef = useRef(null);

  const handleMouseEnter = (index) => { setHovered(index) };
  const handleMouseLeave = () => { setHovered(null) };
  const handleClick = (index) => { setHovered(index) };

  return (
    <>
      <ul className="gnb-inner">
        {
          menuItems.map((item, index) => {
            const hasSubMenu = item.subMenu.length > 0;
            return (
              <li key={index} ref={parentRef} onMouseLeave={!isTablet ? handleMouseLeave : undefined}>
                <Link
                  to="#"
                  className={`depth1 ${hasSubMenu ? 'has' : ''} ${hovered === index ? 'on' : ''}`}
                  onMouseEnter={!isTablet ?
                    () => handleMouseEnter(index) : undefined}
                  onClick={isTablet ?
                    () => handleClick(index) : undefined}
                >{item.title}</Link>
                {hasSubMenu && (
                  <div className="gnb-draw">
                    <div className="draw-inner">
                      <div className="menu-list">
                        <ul>
                          {
                            item.subMenu.map((subItem, subIndex) => {
                              return (
                                <li key={subIndex}><a href="#none">{subItem}</a></li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}