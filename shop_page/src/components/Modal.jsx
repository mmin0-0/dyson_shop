import { useEffect, useState } from "react";

function Modal({isModalOpen, toggleModal}){
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = ['회원 로그인', '비회원 주문확인'];

  const togglePwVisible = (e)=>{
    const pwInput = e.target.previousElementSibling;
    if(pwInput.type === 'password'){
      pwInput.type = 'text';
      e.target.classList.add('on');
    }else{
      pwInput.type = 'password';
      e.target.classList.remove('on');
    }
  };

  return (
    <div className={`modal ${isModalOpen ? 'active' : ''}`}>
      <div className="modal-bg" onClick={toggleModal}></div>
      <div className="modal-cont">
        <div className="modal-tit">
          <strong>로그인</strong>
        </div>
        <div className="modal-info">
          <div className="inner">
            <div className="member-tab">
              {
                tabs.map((tab, index)=>(
                  <a
                    key={index}
                    href="javascript:void(0)" 
                    className={activeIndex === index ? 'on' : ''}
                    onClick={(e)=>{
                      e.preventDefault();
                      setActiveIndex(index);
                    }}>{tab}</a>
                ))
              }
            </div>
            <div className="login-cont">
              {activeIndex === 0 && <Member togglePwVisible={togglePwVisible} />}
              {activeIndex === 1 && <NonMember togglePwVisible={togglePwVisible} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Member({togglePwVisible}){
  const snsLogin = [
    {
      id: 'naver',
      tit: '네이버'
    },{
      id: 'kakao',
      tit: '카카오'
    },{
      id: 'google',
      tit: '구굴'
    },{
      id: 'apple',
      tit: '구글'
    }
  ];

  return(
    <div>
      <div className="login-info">
        <form>
          <div className="input-wrap">
            <input type="text" id="userId" placeholder="아이디를 입력하세요" />
            <label htmlFor="userId" className="hide">회원 아이디</label>
          </div>
          <div className="input-wrap">
            <input type="password" id="userPw" placeholder="비밀번호를 입력하세요" />
            <span className="pw-icon" onClick={togglePwVisible}></span>
            <label htmlFor="userPw" className="hide">회원 비밀번호</label>
          </div>
        </form>
      </div>
      <div className="check-form">
        <div className="input-wrap check">
          <input type="checkbox" id="keepLogin" />
          <label htmlFor="keepLogin">로그인 상태 유지</label>
        </div>
        <div className="input-wrap check">
          <input type="checkbox" id="keepUserId" />
          <label htmlFor="keepUserId">아이디 저장</label>
        </div>
      </div>
      <div className="login-btn">
        <button type="button">로그인</button>
      </div>
      <div className="login-txt">
        <a href="javascript:void(0)">아이디 찾기</a>
        <a href="javascript:void(0)">비밀번호 찾기</a>
      </div>
      <div className="sns-login">
        <div className="sns-login-tit">
          <span>또는 간편하게 로그인</span>
        </div>
        <ul className="sns-login-list">
          {
            snsLogin.map((a,i)=>(
              <li key={i}>
                <a href="javascript:void(0)" id={`${a.id}Ligin`}>
                  <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/images/icon/login_${a.id}_icon.png`} alt={`${a.id} login`} />
                  </div>
                  <span>{a.tit}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

function NonMember({togglePwVisible}){
  return (
    <div>
                <div className="login-info">
                  <form>
                    <div className="input-wrap">
                      <input type="text" id="orderNum" placeholder="주문번호를 입력하세요" />
                      <label htmlFor="userId" className="hide">주문번호</label>
                    </div>
                    <div className="input-wrap">
                      <input type="password" id="orderNumPW" placeholder="주문 비밀번호를 입력하세요" />
                      <span className="pw-icon" onClick={togglePwVisible}></span>
                      <label htmlFor="orderNumPW" className="hide">주문 비밀번호</label>
                    </div>
                  </form>
                  <span className="notice">조회하실 주문번호와 주문 비밀번호를 입력하세요.</span>
                </div>
                <div className="login-btn">
                  <button type="button">확인</button>
                </div>
              </div>
  )
}
export default Modal;