import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { menuItems, keyword } from '../data.js';

export default function Header({ toggleModal }) {
  const [headerClass, setHeaderClass] = useState('');
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(window.innerWidth <= 1200);
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setHeaderClass('header-fixed')
      } else {
        setHeaderClass('')
      }
    };

    if (!isTabletOrSmaller) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTabletOrSmaller]);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.innerWidth <= 1200);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [search, setSearch] = useState(false);
  const toggleSearch = (e) => {
    setSearch(!search);
    if (!search) {
      e.target.classList.add('on');
    } else {
      e.target.classList.remove('on');
    }
  };

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => { setMenu(!menu); };
  const utilityItems = [
    { className: 'user', text: '로그인', onClick: toggleModal, link: null },
    { className: 'basket', text: '장바구니', onClick: null, link: '/cart' },
    { className: 'search-controls', text: '검색', onClick: toggleSearch, link: null }
  ]

  return (
    <>
      <header className={headerClass}>
        <HdInner
          toggleMenu={toggleMenu}
          utilityItems={utilityItems}
        />
        <SearchWrap
          toggleSearch={toggleSearch}
          search={search}
        />
        <NavWrap
          menu={menu}
          toggleMenu={toggleMenu}
          isTabletOrSmaller={isTabletOrSmaller}
          utilityItems={utilityItems}
        />
      </header>
    </>
  );
}

function HdInner({ toggleMenu, utilityItems }) {

  return (
    <>
      <div className="hd-inner-wrap">
        <button className="ham-btn" onClick={toggleMenu}>open menu</button>
        <div className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="dyson" />
          </Link>
        </div>
        <div className="utility-wrap">
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
    </>
  )
}

function SearchWrap({ toggleSearch, search }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const searchChange = (e) => {
    setSearchQuery(e.target.value);
  };
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
              <div className="input-wrap">
                <label htmlFor="searchWrap" className="hide">검색</label>
                <input type="search" id="searchWrap" placeholder="검색어를 입력해 주세요" onChange={searchChange} value={searchQuery} />
                <button type="submit" className="btn-search">검색</button>
              </div>
            </form>
          </div>
          <div className="search-keyword">
            <strong>추천검색어</strong>
            <ul>
              {
                keyword.map((item, index) => {
                  return (
                    <li key={index}><a href="#none">{item}</a></li>
                  )
                })
              }
            </ul>
          </div>
          <div className="btn-closed">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              toggleSearch();
            }}>CLOSED</a>
          </div>
        </div>
      </div>
    </>
  )
}

function NavWrap({ menu, toggleMenu, isTabletOrSmaller, utilityItems }) {
  const [hovered, setHovered] = useState(null);
  const parentRef = useRef(null);

  const handleMouseEnter = (index) => { setHovered(index) };
  const handleMouseLeave = () => { setHovered(null) };
  const handleClick = (index) => { setHovered(index) };

  return (
    <>
      <nav className={`gnb-wrap ${menu ? 'active' : ''}`}>
        <div className="fix-logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="dyson" />
          </Link>
        </div>
        <div className="gnb-wrap-top">
          <Link to="#" className="btn-closed" onClick={toggleMenu}>closed</Link>
          <div className="utility-wrap">
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
        <ul className="gnb-inner">
          {
            menuItems.map((item, index) => {
              const hasSubMenu = item.subMenu.length > 0;
              return (
                <li key={index} ref={parentRef} onMouseLeave={!isTabletOrSmaller ? handleMouseLeave : undefined}>
                  <Link
                    to="#"
                    className={`depth1 
                      ${hasSubMenu ? 'has' : ''} 
                      ${hovered === index ? 'on' : ''}`
                    }
                    onMouseEnter={!isTabletOrSmaller ?
                      () => handleMouseEnter(index) : undefined}
                    onClick={isTabletOrSmaller ?
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
      </nav>
    </>
  )
}