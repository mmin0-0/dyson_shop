function Footer(){
  return (
    <>
      <footer>
        <div className="ft-inner-wrap">
          <div className="news-letter">
            <div className="tit-wrap">
              <strong>최신 소식과 다양한 혜택을 받아보고 싶으신가요?</strong>
            </div>
            <div className="cont-wrap">
              <div className="input-wrap">
                <input type="text" id="newsletter" placeholder="NEWSLETTER Email" />
                <label htmlFor="newsletter" className="hide">newsletter</label>
              </div>
              <button type="button" className="btn-news">검색</button>
            </div>
          </div>
          <div className="menu-wrap">
            <a href="javascript:void(0)">product</a>
            <a href="javascript:void(0)">business product</a>
            <a href="javascript:void(0)">customer support</a>
            <a href="javascript:void(0)">company information</a>
          </div>
          <div className="ft-info con-box">
            <div className="logo">
              <a href="javascript:void(0)"><img src={`${process.env.PUBLIC_URL}/images/common/logo.svg`} alt="dyson" /></a>
            </div>
            <div className="info-wrap">
              <div div className="legal-link">
                <a href="javascript:void(0)">웹사이트 이용약관</a>
                <a href="javascript:void(0)">웹사이트 판매약관</a>
                <a href="javascript:void(0)">개인정보처리방침</a>
                <a href="javascript:void(0)">다이슨 글로벌 개인정보처리방침</a>
                <a href="javascript:void(0)">쿠키 취급 방침</a>
              </div>
              <p>다이슨코리아 유한회사 대표이사: ROBERT JOHN JULIAN WEBSTER(로버트존줄리안웹스터)</p>
              <p>서울특별시 강남구 테헤란로 142, 아크플레이스 17층 .06236</p>
              <p>사업자등록번호 811-81-00675 통신판매번호 2017-서울강남-04029 사업자정보확인</p>
              <p>고객센터: <a href="tel: 080-300-4253">080-300-4253</a> (수신자 부담) / <a href="tel: 1588-4253">1588-4253</a> (운영시간: 월-금 오전 9시-오후 6시) </p>
              <p>이메일: <a href="mailto: help@kr.dyson.com">help@kr.dyson.com</a></p>
            </div>
          </div>
          <div className="copyright">COPYRIGHT © 2024. DYSON LTD. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </>
  )
}

export default Footer;