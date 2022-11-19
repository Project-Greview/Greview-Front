import { useRecoilState } from "recoil";
import { inputNameValue } from "../../../states/inputValueState";
import { Common } from "../../../resources/style/common/commonStyle";

const InputName = () => {
  const [name, setName] = useRecoilState(inputNameValue);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  return(
    <Common.Input>
      <label htmlFor="user_name">이름</label>
      <input
        type="text"
        name="user_name"
        value={name}
        onChange={onChangeName}
        style={{ width: "100%" }}
      />
    </Common.Input>
  )
}

export default InputName;