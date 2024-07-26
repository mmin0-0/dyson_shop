import { useEffect, useState } from "react";

function Modal(){
  return (
    <div className="modal active">
      <div className="modal-cont">
        <div className="modal-tit">
          <strong>로그인</strong>
        </div>
        <div className="modal-info">
          <div className="inner">
            <div className="member-tab">
              <a href="javascript:void(0)" className="on">회원 로그인</a>
              <a href="javascript:void(0)">비회원 주문확인</a>
            </div>
            <div className="login-cont">
              <div>
                <div className="login-info">
                  <form>
                    <div className="input-wrap">
                      <input type="text" id="userId" placeholder="아이디를 입력하세요" />
                      <label htmlFor="userId" className="hide">회원 아이디</label>
                    </div>
                    <div className="input-wrap">
                      <input type="password" id="userPw" placeholder="비밀번호를 입력하세요" />
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
                    <li>
                      <a href="javascript:void(0)">
                        <div className="icon">
                          <img src={`${process.env.PUBLIC_URL}/images/icon/login_naver_icon.png`} alt="naver login" />
                        </div>
                        <span>네이버</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div className="icon">
                          <img src={`${process.env.PUBLIC_URL}/images/icon/login_kakao_icon.png`} alt="kakao login" />
                        </div>
                        <span>카카오톡</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div className="icon">
                          <img src={`${process.env.PUBLIC_URL}/images/icon/login_google_icon.png`} alt="google login" />
                        </div>
                        <span>구글</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div className="icon">
                          <img src={`${process.env.PUBLIC_URL}/images/icon/login_apple_icon.png`} alt="apple login" />
                        </div>
                        <span>애플</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
        <div className="bottom-btn">
          <button type="button" className="cancel">취소</button>
          <button type="button" className="order type01">변경</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;