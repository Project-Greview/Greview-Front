import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegistSection } from "../style/registrationStyle";
import { Common } from "../../../resources/style/common/commonStyle";

import HistoryBack from "../../../resources/style/common/Historyback";
import LocationSetting from "./LocationSetting";

const Registration = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const [passwordCK, setPasswordCK] = useState("");
  const onChangePasswordCK = (e) => {
    setPasswordCK(e.target.value);
  };
  const [telNum, setTelNum] = useState("");
  const onChangeTelNum = (e) => {
    setTelNum(e.target.value);
  };
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const [nickname, setNickname] = useState("");
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  const checkVal = (
    email &&
    password &&
    passwordCK &&
    telNum &&
    name &&
    nickname
  ).length;

  return (
    <RegistSection.RegistFrame>
      <div className="regsit_header flex flex_ai_c">
        <HistoryBack />
        <div className="tit flex flex_jc_c">회원가입</div>
      </div>
      <RegistSection.RegistForm>
        <LocationSetting />
        <Common.Input>
          <label htmlFor="user_email">이메일</label>
          <input
            type="text"
            name="user_email"
            value={email}
            onChange={onChangeEmail}
            style={{ width: "100%" }}
          />
        </Common.Input>
        <Common.Input>
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            name="pw"
            value={password}
            onChange={onChangePassword}
            style={{ width: "100%" }}
          />
        </Common.Input>
        <Common.Input>
          <label htmlFor="pwck">비밀번호 확인</label>
          <input
            type="password"
            name="pwck"
            value={passwordCK}
            onChange={onChangePasswordCK}
            style={{ width: "100%" }}
          />
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_tel">핸드폰 번호</label>
          <input
            type="tel"
            name="user_tel"
            value={telNum}
            onChange={onChangeTelNum}
            style={{ width: "100%" }}
          />
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_name">이름</label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={onChangeName}
            style={{ width: "100%" }}
          />
        </Common.Input>
        <Common.Input>
          <label htmlFor="user_nickname">닉네임</label>
          <input
            type="text"
            name="user_nickname"
            value={nickname}
            onChange={onChangeNickName}
            style={{ width: "100%" }}
          />
        </Common.Input>
      </RegistSection.RegistForm>
      <Common.Button
        className={checkVal !== 0 ? "active" : ""}
        style={{ width: "86%" }}
      >
        가입하기
      </Common.Button>
    </RegistSection.RegistFrame>
  );
};

export default Registration;
