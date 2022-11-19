import { Common } from "../../resources/style/common/commonStyle";

// input components
import InputEmail from "../../components/inputForm/view/InputEmail";
import InputPW from "../../components/inputForm/view/InputPW";
import InputPWCK from "../../components/inputForm/view/InputPWCK";
import InputTel from "../../components/inputForm/view/InputTel";
import InputName from "../../components/inputForm/view/InputName";
import InputNickname from "../../components/inputForm/view/InputNickname";

const PrivateInfoModify = () => {
  return(
    <div className="private_modify flex flex_dir_c flex_ai_c">
      <InputEmail/>
      <InputPW/>
      <InputPWCK/>
      <InputTel/>
      <InputName/>
      <InputNickname/>

      <Common.Button>수정 완료</Common.Button>
    </div>
  )
}

export default PrivateInfoModify;