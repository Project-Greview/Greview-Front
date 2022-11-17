import { useNavigate } from "react-router-dom";

import { LoginSection } from "../style/loginStyle";
import { Common } from "../../../resources/style/common/commonStyle";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
    // PUSH Registration
    const onPushRegist = () => {
      navigate("/regist")
    };

    const [loginID,setLoginID] = useState("");
    const onChangeLoginID = (e) => {
      setLoginID(e.target.value);
    };
    const [loginPW, setLoginPW] = useState("");
    const onChangeLoginPW = (e) => {
      setLoginPW(e.target.value);
    }
  return(
    <LoginSection.LoginForm>
      <div className="login_form flex flex_dir_c">
          <Common.Input className="login_id">
            <input type="text" value={loginID} placeholder="아이디" onChange={onChangeLoginID} style={{width:"100%"}}/>
            <label htmlFor=""></label>
          </Common.Input>
          <Common.Input className="login_pw">
            <input type="password" value={loginPW} placeholder="비밀번호" onChagne={onChangeLoginPW} style={{width:"100%"}}/>
            <label htmlFor=""></label>
          </Common.Input>
          <Common.Button onClick={() => navigate("/main/home",{state: { value: 0 }})}>로그인</Common.Button>
          <div className="has_acc flex flex_jc_c">
            <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
          </div>
        </div>
    </LoginSection.LoginForm>
  );
};

export default Login;
