import { useRecoilState } from "recoil";
import { inputPWValue } from "../../../states/inputValueState";
import { Common } from "../../../resources/style/common/commonStyle";

const InputPW = () => {
  const [password, setPassword] = useRecoilState(inputPWValue);
  const onChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  return(
    <Common.Input>
      <label htmlFor="pw">비밀번호</label>
      <input
        type="password"
        name="pw"
        value={password}
        onChange={onChangePassword}
        style={{ width: "100%" }}
      />
    </Common.Input>
  )
}

export default InputPW;