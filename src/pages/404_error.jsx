import { TitWrap, Strong, P } from "../components/Text";

export default function Error() {
  return (
    <div className="inner con-box" id="error">
      <section id="empty">
        <div className="icon">
          <img src={`${process.env.PUBLIC_URL}/images/icon/error_icon.png`} alt="error" />
        </div>
        <TitWrap>
          <Strong fontSize="2.4rem" fontWeight="600">404 페이지를 찾을 수 없습니다.</Strong>
          <P>
            페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. <br className="d-pc" />
            주소가 올바른지 확인하시거나 메인으로 이동해 주세요.
          </P>
        </TitWrap>
      </section>
    </div>
  )
}
