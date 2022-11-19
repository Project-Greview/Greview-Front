import { useRecoilState } from "recoil";
import { actionLocationvalue } from "../../../states/inputValueState";
import { setPageTitleState } from "../../../states/recoilCounterState";
import { loginUserInfoState } from "../../../states/loginState";
import { Common } from "../../../resources/style/common/commonStyle";

const ActionLocation = () => {
  // const [actionLocation, setActionLocation] = useRecoilState(actionLocationvalue);
  // const setPageValue = useRecoilState(setPageTitleState);
  // const onChangeLocation = (e) => {
  //   setActionLocation(e.target.value);
  // };

  const current_user = useRecoilState(loginUserInfoState);
  const isConfirm = current_user[0].locationConfirm;

  console.log(isConfirm)
  return(
    <Common.Input className={`${isConfirm === true ? "sucess" : "fail"} has_button`}>
      <label htmlFor="user_location">활동지역</label>
        <input
          type="text"
          name="user_location"
          // value={actionLocation}
          // onChange={onChangeLocation}
          style={{ width: "100%" }}
          readOnly
        />
    </Common.Input>
  )
}

export default ActionLocation;