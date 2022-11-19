import { useRecoilState } from "recoil";
import { inputNicknameValue } from "../../../states/inputValueState";
import { setPageTitleState } from "../../../states/commonState";
import { Common } from "../../../resources/style/common/commonStyle";

const InputNickname = () => {
  const [nickname, setNickname] = useRecoilState(inputNicknameValue);
  const setPageValue = useRecoilState(setPageTitleState);
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  console.log(setPageValue[0])
  return(
    <Common.Input>
      <label htmlFor="user_nickname">닉네임</label>
      {setPageValue[0].value === 7 ? 
        <input
          type="text"
          name="user_nickname"
          value={nickname}
          onChange={onChangeNickName}
          style={{ width: "100%" }}
          readOnly
        />
        : 
        <input
          type="text"
          name="user_nickname"
          value={nickname}
          onChange={onChangeNickName}
          style={{ width: "100%" }}
        />
      }
    </Common.Input>
  )
}

export default InputNickname;