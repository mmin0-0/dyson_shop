import { useEffect, useRef, useState } from "react";

function QuickMenu({price}){
  const [watchItem, setWatch] = useState([]);
  useEffect(()=>{
    let watchArr = JSON.parse(localStorage.getItem('watched'));
    if(watchArr){setWatch(watchArr);}
  }, []);
  useEffect(()=>{
    if(watchItem.length > 6){
      let copy = [...watchItem];
      copy.shift();
      setWatch(copy);
      localStorage.setItem('watched', JSON.stringify(copy));
    }
  }, []);

  const [recent, setRecent] = useState(false);
  const goTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };
  
  const [quick, setQuick] = useState('');
  useEffect(()=>{
    const QuickHandler= ()=>{
      let scrollTop = window.scrollY;
      if(scrollTop > 50){
        setQuick('on');
      }else{
        setQuick('');
      }
    };
    window.addEventListener('scroll', QuickHandler);
    return ()=>{
      window.removeEventListener('scroll', QuickHandler);
    };
  }, []);

  useEffect(()=>{
    if(recent){
      document.body.classList.add('fixed');
    }else{
      document.body.classList.remove('fixed');
    }
  });

  return(
    <div className={`quick ${quick}`}>
      <div className="menu-wrap">
        <a href="javascript:void(0)" className="recent" onClick={()=>{
          setRecent(true);
          }}>
          <img src={`${process.env.PUBLIC_URL}/images/icon/recent_icon.png`} alt="최근본상품" />
        </a>
        <a href="javascript:void(0)" className="gotop" onClick={goTop}>
          <img src={`${process.env.PUBLIC_URL}/images/icon/top_icon.png`} alt="top" />
        </a>
      </div>
      <div className={`recent-wrap ${recent ? 'active' : ''}`}>
        <div className="inner">
          <div className="inner-top">
            <strong>최근본상품</strong>
            <a href="javascript:void(0)" className="btn-closed" onClick={()=>{setRecent(false)}}>닫기</a>
          </div>
          <div className={`inner-wrap ${watchItem.length === 0 ? 'empty': ''}`}>
            {
              watchItem && watchItem.length > 0 ? (
                watchItem && watchItem.map((a, i) => {
                  return (
                    <div key={i} className="pd-item">
                      <a href={`detail/${a.category}/${a.id}`}>
                        <div className="img-wrap">
                          <img src={a.img} alt="제품이미지" />
                        </div>
                        <strong>{a.title}</strong>
                        <p>{price(a.price)}원</p>
                      </a>
                    </div>
                  )
                })
              ) : (
                <p>최근 본 상품이 없습니다.</p>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickMenu;