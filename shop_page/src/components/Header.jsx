import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function Header(){
  const navigate = useNavigate();
  const goHome = () =>{navigate('/')};
  const goCartPage = () =>{navigate('/cart')};

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
  const keyword = ['제로웨이스트', 'ECO', '감탄클래스', '친환경 라이프', '비건 케이터링'];
  const menuItems = [
    {
      title: '청소기',
      subMenu: ['물청소기', '진공 + 물청소기', '진공청소기', '로봇청소기', '나에게 맞는 제품 선택하기', '무선 청소기 툴', '무선 청소기 배터리'],
    },
    {
      title: '헤어케어',
      subMenu: ['웻앤드라이 스트레이트너', '스타일러', '스타일러 커스텀', '드라이어', '스트레이트너'],
    },
    {
      title: '공기청정기 및 선풍기',
      subMenu: ['공기청정기', '가습 공기청정기', '공기청정기 필터', '나에게 맞는 제품 선택하기'],
    },
    {
      title: '헤드폰',
      subMenu: ['헤드폰 모두보기', '다이슨 존 노이즈 캔슬링 헤드폰'],
    },
    {
      title: '액세서리 및 부품',
      subMenu: ['무선청소기 툴', '무선청소기 배터리', '헤어케어 케이스, 브러시, 거치대 및 툴', '공기청정기 필터'],
    },
    {
      title: '비즈니스 재품',
      subMenu: ['헤어케어', '핸드 드라이어', '무선 청소기', '공기청정기', '조명'],
    },
    {
      title: '매장안내',
      subMenu: ['다이슨 데모 스토어', '다이슨 뷰티 스토어', '다이슨 서비스 센터', '다이슨 백화점 매장'],
    }
  ];

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
              <a href="javascript:void(0)" className="user" onClick={goCartPage}>user</a>
              <a href="javascript:void(0)" className="search-controls" onClick={toggleSearch}>검색</a>
          </div>
        </div>
        <div className={`search-wrap ${search ? 'active' : 'closed'}`}>
          <div className="search-inner">
            <div className="search-inp">
              <form action="submit">
                <div className="input-wrap">
                  <label for="searchWrap" className="hide">검색</label>
                  <input type="search" id="searchWrap" placeholder="검색어를 입력해 주세요" />
                  <button type="button" className="btn-search">검색</button>
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
              <a href="#none" className="user">로그인</a>
              <a href="#none" className="basket">장바구니</a>
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
                        {/* <div className="banner">
                          <ul>
                            {
                              item.banner.map((banner, index) => (
                                banner.length >0 &&  <li key={`${index}`}>
                                  <a href="#none">
                                    <div className="img-wrap">
                                      <img src={banner.img[index]} alt="banner img" />
                                    </div>
                                    <p>{banner.tit[index]}</p>
                                  </a>
                                </li>
                              ))
                            }
                          </ul>
                        </div> */}
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

export default Header