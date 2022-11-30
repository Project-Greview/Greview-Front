import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

import { loginIDInputValueState } from "../../states/inputValueState";
import { loginIDInputValue, loginPWInputValue } from "../../states/inputValueState";
import { loginState } from "../../states/memberState";

import { LoginSection } from "../../components/inputForm/style/loginStyle";
import { SpalshSection } from "../../components/splash/style/splashStyle";
import { Common } from "../../resources/style/common/commonStyle";

import LoginID from "../../components/inputForm/view/LoginID";
import LoginPW from "../../components/inputForm/view/LoginPW";

import images from "../../resources/img/img";

import * as LogintAction from "../../actions/memberAction";
import axios from "axios";

const Login = () => {
  const valID = useRecoilState(loginIDInputValue);
  const valPW = useRecoilState(loginPWInputValue);
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
        email: valID[0],
        password: valPW[0],
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
        <LoginID/>
        <LoginPW/>
        {/* <Common.Button onClick={() => navigate("/main/home",{state: { value: 0, tit: "지도", naviView: true }})}>로그인</Common.Button> */}
        <Common.Button onClick={LoginPost}>로그인</Common.Button>
          <div className="has_acc flex flex_jc_c">
            <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
          </div>
      </div>
    </SpalshSection.SpalshFrame>
  )
}

export default Login;