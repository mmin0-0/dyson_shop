import { Routes, Route, Link } from 'react-router-dom';
import '../assets/scss/components/header.scss'
import { useEffect, useState } from 'react';

function Header(){
  let [headerClass, setHeaderClass] = useState('');
  useEffect(()=>{
    const handleScroll = ()=>{
      let scrollTop = window.scrollY;
      if(scrollTop > 0){
        setHeaderClass('header-fixed')
      }else{
        setHeaderClass('')
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  let [search, setSearch] = useState(false);
  let toggleSearch = ()=>{setSearch(!search);};
  let keyword = ['제로웨이스트', 'ECO', '감탄클래스', '친환경 라이프', '비건 케이터링'];

  let [hovered, setHovered] = useState(null);
  let handleMouseEnter = (index) => {setHovered(index)};
  let handleMouseLeave = () => {setHovered(null)};
  let menuItems = [
    {
      title: '감탄상회 소개',
      subMenu: ['브랜드', '감탄 스토리', '비전', '활동가 소개'],
      banner: [
        {
          img: ['https://cdn.imweb.me/thumbnail/20230118/0aa5f31252d84.jpg'],
          tit: ['감탄상회 오프라인 매장']
        }
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
          <div className="logo">
              <a href="#none">
                <img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`}   alt="감탄상회" />
              </a>
          </div>
          <div className="utility-wrap">
              <button className="user">user</button>
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
        <nav className="gnb-wrap">
          <ul className="gnb-inner">
            {
              menuItems.map((item, index)=>{
                return (
                <li key={index} onMouseLeave={handleMouseLeave}>
                  <a
                    href="#none"
                    className={`depth1 ${hovered === index ? 'on' : ''}`}
                    onMouseEnter={() => {handleMouseEnter(index)}}
                  >
                    {item.title}
                  </a>
                  {item.subMenu.length > 0 && (
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
                              menuItems.map((item, index) => {
                                if (item.banner.length > 0) {
                                  return item.banner.map((bannerItem, bannerIndex) => (
                                    <li key={`${index}-${bannerIndex}`}>
                                      <a href="#none">
                                        <div className="img-wrap">
                                          <img src={bannerItem.img[bannerIndex]} alt="banner img" />
                                        </div>
                                        <p>{bannerItem.tit[bannerIndex]}</p>
                                      </a>
                                    </li>
                                  ));
                                }
                                return null;
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