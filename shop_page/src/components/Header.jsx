import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { menuItems, keyword, pdList, benefit, tabMenu } from '../data.js';

function Header(){
  const navigate = useNavigate();
  const goHome = () =>{navigate('/')};
  const goCartPage = () =>{navigate('/cart')};
  const goSearch = ()=>{navigate('/search')};

  const [searchQuery, setSearchQuery] = useState('');
  const searchChange = (e)=>{
    setSearchQuery(e.target.value);
  };
  const formSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  const [headerClass, setHeaderClass] = useState('');
  const [hovered, setHovered] = useState(null);
  const parentRef = useRef(null);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(window.innerWidth <= 1200);

  useEffect(()=>{
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

  useEffect(()=>{
    const handleResize = ()=>{
      setIsTabletOrSmaller(window.innerWidth <= 1200);
      console.log('resize')
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {setHovered(index)};
  const handleMouseLeave = () => {setHovered(null)};
  const handleClick = (index) => {setHovered(index)};

  const [search, setSearch] = useState(false);
  const toggleSearch = (e)=>{
    setSearch(!search);
    if(!search){
      e.target.classList.add('on');
    }else{
      e.target.classList.remove('on');
    }
  };

  const [menu, setMenu] = useState(false);
  const toggleMenu = ()=>{setMenu(!menu);};
  
  return (
    <>
      <header className={headerClass}>
        <div className="hd-inner-wrap">
          <a href="javascript:void(0)" className="ham-btn" onClick={toggleMenu}>메뉴열기</a>
          <div className="logo">
            <a href="javascript:void(0)" onClick={goHome}>
              <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="dyson" />
            </a>
          </div>
          <div className="utility-wrap">
              <a href="javascript:void(0)" className="user" >user</a>
              <a href="javascript:void(0)" className="basket" onClick={goCartPage}>basket</a>
              <a href="javascript:void(0)" className="search-controls" onClick={toggleSearch}>검색</a>
          </div>
        </div>
        <div className={`search-wrap ${search ? 'active' : 'closed'}`}>
          <div className="search-inner">
            <div className="search-inp">
              <form onSubmit={formSubmit}>
                <div className="input-wrap">
                  <label for="searchWrap" className="hide">검색</label>
                  <input 
                  type="search" id="searchWrap" placeholder="검색어를 입력해 주세요" onChange={searchChange} 
                  value={searchQuery}
                  />
                  <button type="submit" className="btn-search">검색</button>
                </div>
              </form>
            </div>
            <div className="search-keyword">
              <strong>추천검색어</strong>
              <ul>
                {
                  keyword.map((item, index)=>{
                    return (<li><a href="#none">{item}</a></li>)
                  })
                }
              </ul>
            </div>
            <div className="btn-closed">
              <a href="javascript:void(0)" onClick={toggleSearch}>CLOSED</a>
            </div>
          </div>
        </div>
        <nav className={`gnb-wrap ${menu ? 'active' : ''}`}>
          <div className="fix-logo">
            <a href="javascript:void(0)" onClick={goHome}>
              <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="dyson" />
            </a>
          </div>
          <div className="gnb-wrap-top">
            <a href="javascript:void(0)" className="btn-closed" onClick={toggleMenu}>닫기</a>
            <div className="utility-wrap">
              <a href="javascirpt:void(0)" className="user">로그인</a>
              <a href="javascirpt:void(0)" className="basket" onClick={goCartPage}>장바구니</a>
            </div>
          </div>
          <ul className="gnb-inner">
            {
              menuItems.map((item, index)=>{
                const hasSubMenu = item.subMenu.length > 0;
                return (
                <li key={index} ref={parentRef} onMouseLeave={!isTabletOrSmaller ? handleMouseLeave : undefined}>
                  <a
                    href="#none"
                    className={`depth1 ${hasSubMenu ? 'has' : ''} ${hovered === index ? 'on' : ''}`}
                    onMouseEnter={!isTabletOrSmaller ? () => handleMouseEnter(index) : undefined}
                    onClick={isTabletOrSmaller ? () => handleClick(index) : undefined}
                  >
                    {item.title}
                  </a>
                  {hasSubMenu && (
                    <div className="gnb-draw">
                      <div className="draw-inner">
                        <div className="menu-list">
                          <ul>
                            {
                              item.subMenu.map((subItem, subIndex)=>{
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
      </header>
    </>
  );
}

export default Header;