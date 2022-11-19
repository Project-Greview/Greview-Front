import { useRecoilState } from "recoil";
import { inputTelValue } from "../../../states/inputValueState";
import { Common } from "../../../resources/style/common/commonStyle";

const InputTel = () => {
  const [telNum, setTelNum] = useRecoilState(inputTelValue);
  const onChangeTelNum = (e) => {
    setTelNum(e.target.value);
  };
  return(
    <Common.Input>
      <label htmlFor="user_tel">핸드폰 번호</label>
      <input
        type="tel"
        name="user_tel"
        value={telNum}
        onChange={onChangeTelNum}
        style={{ width: "100%" }}
      />
    </Common.Input>
  )
}

export default InputTel;