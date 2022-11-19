import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginIDInputValueState } from "../../states/inputValueState";
import { LoginSection } from "../../components/inputForm/style/loginStyle";
import { Common } from "../../resources/style/common/commonStyle";
import LoginID from "../../components/inputForm/view/LoginID";
import LoginPW from "../../components/inputForm/view/LoginPW";

const Login = () => {
  const count = useRecoilValue(loginIDInputValueState);
  const navigate = useNavigate();
  // PUSH Registration
  const onPushRegist = () => {
    navigate("/regist", {state: {tit: "회원가입", value: 9}})
  };
  return(
    <LoginSection.LoginForm>
      <div className="login_form flex flex_dir_c">
        <LoginID/>
        <LoginPW/>
        <Common.Button onClick={() => navigate("/main/home",{state: { value: 0, tit: "지도", naviView: true }})}>로그인</Common.Button>
          <div className="has_acc flex flex_jc_c">
            <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
          </div>
      </div>
    </LoginSection.LoginForm>
  )
}

export default Login;