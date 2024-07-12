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

  return(
    <div className="quick">
      <div className="menu-wrap">
        <a href="javascript:void(0)" className="recent">
          <img src={`${process.env.PUBLIC_URL}/images/icon/recent_icon.png`} alt="최근본상품" />
        </a>
        <a href="javascript:void(0)" className="gotop">
          <img src={`${process.env.PUBLIC_URL}/images/icon/top_icon.png`} alt="top" />
        </a>
      </div>
      <div className="recent-wrap active">
        <div className="inner">
          <div className="inner-top">
            <strong>최근본상품</strong>
            <a href="javascript:void(0)" className="btn-closed">닫기</a>
          </div>
          <div className="inner-wrap">
            {
              watchItem && watchItem.map((a, i) => {
                return (
                  <div key={i} className="pd-item">
                    <a href="javascript:void(0)">
                      <div className="img-wrap">
                        <img src={a.img} alt="제품이미지" />
                      </div>
                      <strong>{a.title}</strong>
                      <p>{price(a.price)}원</p>
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickMenu;