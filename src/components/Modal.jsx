import { useState } from "react";
import { Link } from 'react-router-dom';

function Modal({ isModalOpen, toggleModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = ['회원 로그인', '비회원 주문확인'];

  const togglePwVisible = (e) => {
    const pwInput = e.target.previousElementSibling;
    if (pwInput.type === 'password') {
      pwInput.type = 'text';
      e.target.classList.add('on');
    } else {
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
                tabs.map((tab, index) => (
                  <Link
                    to="#"
                    key={tab}
                    className={activeIndex === index ? 'on' : ''}
                    onClick={setActiveIndex(index)}
                  >{tab}</Link>
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

function Member({ togglePwVisible }) {
  const loginForm = {
    input: [
      { type: 'text', idTag: "userId", placeholder: '아이디를 입력하세요.', onClick: null },
      { type: 'password', idTag: "userPw", placeholder: '비밀번호를 입력하세요.', onClick: togglePwVisible }
    ],
    checkbox: [
      { idTag: 'keepLogin', text: '로그인 상태 유지' },
      { idTag: 'keepUserId', text: '아이디 저장' }
    ],
    category: ['회원가입', '아이디 찾기', '비밀번호 찾기'],
    social: [
      { id: 'naver', tit: '네이버' },
      { id: 'kakao', tit: '카카오' },
      { id: 'google', tit: '구글' },
      { id: 'apple', tit: '구글' }
    ]
  }

  return (
    <div>
      <div className="login-info">
        <form>
          {
            loginForm.input.map((login) => (
              <div key={login.idTag} className="input-wrap">
                <input
                  type={login.type}
                  id={login.idTag}
                  placeholder={login.placeholder}
                />
                {login.type === 'password' && (
                  <span className="pw-icon" onClick={login.onClick}></span>
                )}
                <label htmlFor={login.idTag} className="hide">
                  {login.idTag}
                </label>
              </div>
            ))
          }
        </form>
      </div>
      <div className="check-form">
        {
          loginForm.checkbox.map((check) =>
            <div className="input-wrap check" key={check.idTag}>
              <input type="checkbox" id={check.idTag} />
              <label htmlFor={check.idTag}>{check.text}</label>
            </div>
          )
        }
      </div>
      <div className="login-btn">
        <button type="button">로그인</button>
      </div>
      <div className="login-txt">
        {
          loginForm.category.map((item) =>
            <Link to="#" key={item}>{item}</Link>
          )
        }
      </div>
      <div className="sns-login">
        <div className="sns-login-tit">
          <span>또는 간편하게 로그인</span>
        </div>
        <ul className="sns-login-list">
          {
            loginForm.social.map((a, i) => (
              <li key={a.tit}>
                <Link to="#" id={`${a.id}Ligin`}>
                  <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/images/icon/login_${a.id}_icon.png`} alt={`${a.id} login`} />
                  </div>
                  {a.tit}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

function NonMember({ togglePwVisible }) {
  const orderForm = [
    { type: 'text', tit: '주문번호', idTag: 'orderNum', placeholder: '주문번호를 입력하세요.', maxlength: 20, onClick: null },
    { type: 'password', tit: '주문 비밀번호', idTag: 'orderNumPw', placeholder: '주문 비밀번호를 입력하세요.', maxlength: null, onClick: togglePwVisible }
  ];
  
  return (
    <div>
      <div className="login-info">
        <form>
          {
            orderForm.map((item) =>
              <div className="input-wrap" key={item.tit}>
                <input 
                  type={item.type} 
                  id={item.idTag} 
                  placeholder={item.placeholder} 
                  maxlength={item.maxlength} />
                {
                  item.type === 'password' && (
                    <span className="pw-icon" onClick={togglePwVisible}></span>
                  )
                }
                <label htmlFor={item.idTag} className="hide">{item.tit}</label>
              </div>
            )
          }
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