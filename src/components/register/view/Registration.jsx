import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegistSection } from "../style/registrationStyle";
import { Common } from "../../../resources/style/styled-components/commonStyle";
import images from "../../../resources/img/img";

const Registration = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const [password,setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const [passwordCK, setPasswordCK] = useState("");
  const onChangePasswordCK = (e) => {
    setPasswordCK(e.target.value);
  }
  const [telNum, setTelNum] = useState("");
  const onChangeTelNum = (e) => {
    setTelNum(e.target.value);
  }
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const [nickname, setNickname] = useState("");
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  }

  return(
    <RegistSection.RegistFrame>
      <div className="regsit_header flex flex_ai_c">
        <div onClick={() => {navigate(-1)}} className="cursor_p"><img src={images.arrow_left} alt="뒤로가기"/></div>
        <div className="tit">회원가입</div>
      </div>
      <RegistSection.RegistForm>
        <Common.Input>
          <label htmlFor="user_email">이메일</label>
          <input type="text" name="user_email" value={email} onChange={onChangeEmail}/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="pw">비밀번호</label>
          <input type="password" name="pw" value={password} onChange={onChangePassword}/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="pwck">비밀번호 확인</label>
          <input type="password" name="pwck" value={passwordCK} onChange={onChangePasswordCK}/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_tel">핸드폰 번호</label>
          <input type="tel" name="user_tel" value={telNum} onChange={onChangeTelNum}/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_name">이름</label>
          <input type="text" name="user_name" value={name} onChange={onChangeName}/>
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_nickname">닉네임</label>
          <input type="text" name="user_nickname" value={nickname} onChange={onChangeNickName}/>
        </Common.Input>
      </RegistSection.RegistForm>
      <Common.Button>가입하기</Common.Button>
    </RegistSection.RegistFrame>
  )
}

export default Registration;