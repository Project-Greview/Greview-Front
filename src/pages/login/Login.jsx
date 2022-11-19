import { useNavigate } from "react-router-dom";
import { LoginSection } from "../../components/inputForm/style/loginStyle";
import { Common } from "../../resources/style/common/commonStyle";
import InputPW from "../../components/inputForm/view/InputPW";
import InputID from "../../components/inputForm/view/InputID";

const Login = () => {
  const navigate = useNavigate();
  // PUSH Registration
  const onPushRegist = () => {
    navigate("/regist", {state: {tit: "회원가입", value: 9}})
  };
  return(
    <LoginSection.LoginForm>
      <div className="login_form flex flex_dir_c">
        <InputID/>
        <InputPW/>
        <Common.Button onClick={() => navigate("/main/home",{state: { value: 0 }})}>로그인</Common.Button>
          <div className="has_acc flex flex_jc_c">
            <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
          </div>
      </div>
    </LoginSection.LoginForm>
  )
}

export default Login;