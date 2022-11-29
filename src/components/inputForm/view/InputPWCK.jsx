import { useRecoilState } from "recoil";
import { inputPWCKValue } from "../../../states/inputValueState";
import { Common } from "../../../resources/style/common/commonStyle";

const InputPWCK = () => {
  const [passwordCK, setPasswordCK] = useRecoilState(inputPWCKValue);
  const onChangePasswordCK = (e) => {
    e.preventDefault();
    setPasswordCK(e.target.value);
  };
  return(
    <Common.Input>
      <label htmlFor="pwck">비밀번호 확인</label>
      <input
        type="password"
        name="pwck"
        value={passwordCK}
        onChange={onChangePasswordCK}
        style={{ width: "100%" }}
      />
    </Common.Input>
  )
}

export default InputPWCK;