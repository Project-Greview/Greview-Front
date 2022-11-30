import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

import { loginIDInputValueState } from "../../states/inputValueState";
import { loginState } from "../../states/memberState";

import { LoginSection } from "../../components/inputForm/style/loginStyle";
import { SpalshSection } from "../../components/splash/style/splashStyle";
import { Common } from "../../resources/style/common/commonStyle";


import images from "../../resources/img/img";

const Login = () => {
  const [LoginID, setLoginID] = useState("");
  const onChangeLoginID = (e) => {
    e.preventDefault();
    setLoginID(e.target.value);
  };
  const [LoginPW, setLoginPW] = useState("");
  const onChangeLoginPW = (e) => {
    e.preventDefault();
    setLoginPW(e.target.value);
  };
  const count = useRecoilValue(loginIDInputValueState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const navigate = useNavigate();
  // PUSH Registration
  const onPushRegist = () => {
    navigate("/regist", {state: {tit: "회원가입", value: 9}})
  };

  const LoginPost = () => {
    axios.post("members/login",
    {headers:
      {
        accept: "*/*",
        "Content-Type": "application/json",
      },
        email: LoginID,
        password: LoginPW,
    }).then ((res) => {
      if (res.status === 200) {
        sessionStorage.setItem("session_token", res.data);
        setIsLogin(true);
        navigate("/main/home",{state: { value: 0, tit: "지도", naviView: true }});
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  return(
    <SpalshSection.SpalshFrame>
    <img src={images.welcomeLogo} alt="" className="main_logo"/>
      <div className="login_form flex flex_dir_c">
      <Common.Input className="login_id">
        <input 
          type="text" 
          value={LoginID} 
          placeholder="아이디" 
          onChange={onChangeLoginID} 
          style={{width:"100%"}}
        />
        <label htmlFor=""></label>
      </Common.Input>
      <Common.Input className="login_pw">
        <input 
          type="password" 
          value={LoginPW} 
          placeholder="비밀번호" 
          onChange={onChangeLoginPW} 
          style={{width:"100%"}}
        />
        <label htmlFor=""></label>
      </Common.Input>
        {/* <Common.Button onClick={() => navigate("/main/home",{state: { value: 0, tit: "지도", naviView: true }})}>로그인</Common.Button> */}
        <Common.Button onClick={LoginPost}>로그인</Common.Button>
          <div className="has_acc flex flex_jc_c">
            <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
          </div>
      </div>
      <span></span>
    </SpalshSection.SpalshFrame>
  )
}

export default Login;