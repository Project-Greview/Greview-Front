import InputEmail from "../../components/inputForm/view/InputEmail";
import InputNickname from "../../components/inputForm/view/InputNickname";
import ActionLocation from "../../components/inputForm/view/ActionLocation";
import ProfileImage from "../../components/mypage/view/ProfileIImage";
import { Common } from "../../resources/style/common/commonStyle";


const MyPageModify = () => {
  return(
    <div className="modify flex flex_dir_c flex_ai_c">
      <ProfileImage/>

      <InputNickname/>
      <InputEmail/>
      <ActionLocation/>

      <Common.Button>수정 완료</Common.Button>
    </div>
  )
}

export default MyPageModify;