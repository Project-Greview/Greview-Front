import { useState } from "react";
import { Common } from "../../../resources/style/common/commonStyle";

const InputID = () => {
  const [loginID,setLoginID] = useState("");
    const onChangeLoginID = (e) => {
      setLoginID(e.target.value);
    };
  return(
    <Common.Input className="login_id">
      <input type="text" value={loginID} placeholder="아이디" onChange={onChangeLoginID} style={{width:"100%"}}/>
      <label htmlFor=""></label>
    </Common.Input>
  )
}

export default InputID;