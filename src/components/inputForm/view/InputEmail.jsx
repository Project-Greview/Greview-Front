import { useRecoilState } from "recoil";
import { inputEmailValue } from "../../../states/inputValueState";
import { setPageTitleState } from "../../../states/recoilCounterState";
import { Common } from "../../../resources/style/common/commonStyle";

const InputEmail = () => {
  const [email, setEmail] = useRecoilState(inputEmailValue);
  const setPageValue = useRecoilState(setPageTitleState);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  return(
    <Common.Input>
      <label htmlFor="user_email">이메일</label>
      {setPageValue[0].value === 7 ? 
        <input
          type="text"
          name="user_email"
          value={email}
          onChange={onChangeEmail}
          style={{ width: "100%" }}
          readOnly
        />
        :
        <input
          type="text"
          name="user_email"
          value={email}
          onChange={onChangeEmail}
          style={{ width: "100%" }}
        />
      }
    </Common.Input>
  )
}

export default InputEmail;