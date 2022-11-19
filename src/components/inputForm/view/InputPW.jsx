import { useState } from "react";
import { Common } from "../../../resources/style/common/commonStyle";

const InputPW = () => {
  const [loginPW, setLoginPW] = useState("");
    const onChangeLoginPW = (e) => {
      setLoginPW(e.target.value);
    }
  return(
    <Common.Input className="login_pw">
      <input type="password" value={loginPW} placeholder="비밀번호" onChagne={onChangeLoginPW} style={{width:"100%"}}/>
      <label htmlFor=""></label>
    </Common.Input>
  )
}

export default InputPW;