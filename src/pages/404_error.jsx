function Error(){
  return (
    <div id="wrap" className="error">
      <div className="wrap-inner">
        <div className="empty-wrap con-box">
          <div className="icon">
            <img src={`${process.env.PUBLIC_URL}/images/icon/error_icon.png`} alt="error" />
          </div>
          <div className="txt-wrap">
            <strong>404 페이지를 찾을 수 없습니다.</strong>
            <p>
              페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. <br className="d-pc"/>
              주소가 올바른지 확인하시거나 메인으로 이동해 주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error;