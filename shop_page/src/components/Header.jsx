import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import '../assets/scss/components/header.scss'
import { useEffect, useRef, useState } from 'react';

function Header(){
  const navigate = useNavigate();
  const goCartPage = () =>{navigate('/cart')}

  const [headerClass, setHeaderClass] = useState('');
  const [hovered, setHovered] = useState(null);
  const parentRef = useRef(null);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(window.innerWidth <= 1000);

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
      setIsTabletOrSmaller(window.innerWidth <= 1000);
      console.log('resize')
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const parentRef = useRef(null);
  // useEffect(()=>{
  //   const gnbMenu = parentRef.current;

  //   if(gnbMenu && gnbMenu.querySelector('.gnb-draw')){
  //     const depth1 = gnbMenu.querySelectorAll('.depth1')
  //     depth1.forEach((e)=>{
  //       e.classList.add('new')
  //     });
  //   }
  // });

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
      title: '감탄상회 소개',
      subMenu: ['브랜드', '감탄 스토리', '비전', '활동가 소개'],
      banner: [
        {
          img: ['https://cdn.imweb.me/thumbnail/20230118/0aa5f31252d84.jpg'],
          tit: ['감탄상회 오프라인 매장']
        },
        
      ]
    },
    {
      title: '감탄스토어',
      subMenu: ['세트상품', '욕실용품', '생활용품'],
      banner: [
        {
          img: ['"https://cdn.imweb.me/thumbnail/20231220/7d4e1584d1288.jpg"'],
          tit: ['그물면주머니 프로듀스백 3종']
        }
      ]
    },
    {
      title: '비건 케이터링',
      subMenu: ['비건이란?'],
      banner : []
    },
    {
      title: '감탄클래스',
      subMenu: ['원데이 클래스', '환경생태 프로그램', '찾아가는 환경교육', '골목 반상회', '대관/커뮤니티 신청'],
      banner : []
    },
    {
      title: '캠페인',
      subMenu: [],
      banner : []
    },
    {
      title: '커뮤니티',
      subMenu: ['공지사항', '자주 묻는 질문', 'Q&A', '고객후기'],
      banner : []
    },
  ];

  return (
    <>
      <header className={headerClass}>
        <div className="hd-inner-wrap">
          <button className="ham-btn" onClick={toggleMenu}>메뉴열기</button>
          <div className="logo">
              <a href="#none">
                <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`}   alt="감탄상회" />
              </a>
          </div>
          <div className="utility-wrap">
              <button className="user" onClick={goCartPage}>user</button>
              <button className="search-controls" onClick={toggleSearch}>검색</button>
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
                {
                  keyword.map((item, index)=>{
                    return (<li><a href="#none">{item}</a></li>)
                  })
                }
              </ul>
            </div>
            <div className="btn-closed">
              <button type="button" onClick={toggleSearch}>CLOSED</button>
            </div>
          </div>
        </div>
        <nav className={`gnb-wrap ${menu ? 'active' : ''}`}>
          <div className="gnb-wrap-top">
            <button className="btn-closed" onClick={toggleMenu}>닫기</button>
            <div className="utility-wrap">
              <a href="#none" className="user">로그인</a>
              <a href="#none" className="user">장바구니</a>
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
                        <div className="banner">
                          <ul>
                            {
                              item.banner.map((banner, index) => (
                                banner.length>0 &&  <li key={`${index}`}>
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

export default Header