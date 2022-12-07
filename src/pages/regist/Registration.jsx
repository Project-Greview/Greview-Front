import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "axios";

import { registPostState } from "../../states/memberState";

import { RegistSection } from "../../components/register/style/registrationStyle";
import { Common } from "../../resources/style/common/commonStyle";

import HistoryBack from "../../components/include/view/HistorybackButton";
import LocationSetting from "../../components/register/view/LocationSetting";

// input components
import RegistSuccess from "../../components/register/view/modal/RegistSuccess";
import * as Util from "../../util/text/textUtil";

const Registration = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    Util.OnlyEngNumUnderbar(e);
    e.preventDefault();
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const [passwordCK, setPasswordCK] = useState("");
  const onChangePasswordCK = (e) => {
    e.preventDefault();
    setPasswordCK(e.target.value);
  };
  const [telNum, setTelNum] = useState("");
  const onChangeTelNum = (e) => {
    e.preventDefault();
    setTelNum(e.target.value);
  };
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const [nickname, setNickname] = useState("");
  const onChangeNickName = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
  };
  const [isRegist, setIsRegist] = useRecoilState(registPostState);
  const onRegistPost = () => {
    axios.post("members/join",
    {headers:
      {
        accept: "*/*",
        "Content-Type": "application/json",
      },
        email: email,
        password: password,
        phone: telNum,
        name: name,
        nickname: nickname,
    }).then ((res) => {
      if (res.status === 200) {
        setIsRegist(true);
      }
    }).catch((err) => {
      console.log(err);
    });
  };
  
  useEffect(() => {
    onRegistPost()
  },[])
  
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
              type="email"
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
        <span></span>
      </RegistSection.RegistForm>
      <Common.Button
        className={
          email.value !== 0 &&
          password.value !== 0 &&
          passwordCK.value !== 0 &&
          telNum.value !== 0 &&
          name.value !== 0 &&
          nickname.value !== 0
          ? "active" : ""
        }
        style={{ width: "86%" }}
        onClick={onRegistPost}
        disabled={
          email.value !== 0 &&
          password.value !== 0 &&
          passwordCK.value !== 0 &&
          telNum.value !== 0 &&
          name.value !== 0 &&
          nickname.value !== 0
          ? false : true
        }
        
      >
        가입하기
      </Common.Button>
      {isRegist === false ?
        "" 
      : 
        <RegistSuccess/>
      }
      
    </RegistSection.RegistFrame>
  );
};

export default Registration;
