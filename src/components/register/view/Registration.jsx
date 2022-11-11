import { useNavigate } from "react-router-dom";
import { RegistSection } from "../style/registrationStyle";
import { Common } from "../../../resources/style/styled-components/commonStyle";
import images from "../../../resources/img/img";

const Registration = () => {

  const navigate = useNavigate();
  return(
    <RegistSection.RegistFrame>
      <div className="regsit_header flex">
        <div onClick={() => {navigate(-1)}} className="cursor_p"><img src={images.arrow_left} alt="뒤로가기"/></div>
        <div className="tit">회원가입</div>
      </div>
      <RegistSection.RegistForm>
        <Common.Input>
          <label htmlFor="user_email">이메일</label>
          <input type="text" name="user_email"/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="pw">비밀번호</label>
          <input type="password" name="pw"/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="pwck">비밀번호 확인</label>
          <input type="password" name="pwck"/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_tel">핸드폰 번호</label>
          <input type="tel" name="user_tel"/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_name">이름</label>
          <input type="text" name="user_name"/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_nickname">닉네임</label>
          <input type="text" name="user_nickname"/>
        </Common.Input>
      </RegistSection.RegistForm>
      <Common.Button>가입하기</Common.Button>
    </RegistSection.RegistFrame>
  )
}

export default Registration;