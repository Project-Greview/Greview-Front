import { useRecoilState } from "recoil";
import { loginIDInputValue } from "../../../states/inputValueState";
import { Common } from "../../../resources/style/common/commonStyle";

const LoginID = () => {
  const [LoginID, setLoginID] = useRecoilState(loginIDInputValue);
  const onChangeLoginID = (e) => {
    setLoginID(e.target.value);
  };
  return(
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
  )
}

export default LoginID;