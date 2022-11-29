import { useRecoilState } from "recoil";
import { inputEmailValue } from "../../../states/inputValueState";
import { setPageInfoState } from "../../../states/commonState";
import { Common } from "../../../resources/style/common/commonStyle";

const InputEmail = () => {
  const [email, setEmail] = useRecoilState(inputEmailValue);
  const pageState = useRecoilState(setPageInfoState);
  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  
  return(
    <Common.Input>
      <label htmlFor="user_email">이메일</label>
      {pageState[0].value === 7 ? 
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