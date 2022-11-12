import { useNavigate } from "react-router-dom";

import { LoginSection } from "../style/loginStyle";
import { Common } from "../../../resources/style/styled-components/commonStyle";
const Login = () => {
  const navigate = useNavigate();
    // PUSH Registration
    const onPushRegist = () => {
      navigate("/regist")
    }
  return(
    <LoginSection.LoginForm>
      <div className="login_form flex flex_dir_c">
          <Common.Input className="login_id">
            <input type="text" placeholder="아이디"/>
            <label htmlFor=""></label>
          </Common.Input>
          <Common.Input className="login_pw">
            <input type="password" placeholder="비밀번호"/>
            <label htmlFor=""></label>
          </Common.Input>
          <Common.Button>로그인</Common.Button>
          <div className="has_acc flex flex_jc_c">
            <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
          </div>
        </div>
    </LoginSection.LoginForm>
  )
}

export default Login;