function QuickMenu(){
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
          <strong>최근본상품</strong>
        </div>
      </div>
      {/* <div className="latest-pd">
          <strong>최근본상품</strong>
          <div>
          {
            watchItem && watchItem.map((a, i) => {
              return (
                <div key={i} className="pd-item">
                  <p>{a.title}</p>
                  <p>{a.price}</p>
                  <p>{a.content}</p>
                </div>
              )
            })
          }
          </div>
        </div> */}
    </div>
  )
}

export default QuickMenu;