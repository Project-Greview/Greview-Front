import { useRecoilState } from "recoil";
import { loginPWInputValue } from "../../../states/inputValueState";
import { Common } from "../../../resources/style/common/commonStyle";

const LoginPW = () => {
  const [LoginPW, setLoginPW] = useRecoilState(loginPWInputValue);
  const onChangeLoginPW = (e) => {
    e.preventDefault();
    setLoginPW(e.target.value);
  };
  return(
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
  )
}

export default LoginPW;