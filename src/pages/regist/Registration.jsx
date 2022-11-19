import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { 
  inputEmailValue,
  inputPWValue,
  inputPWCKValue,
  inputTelValue,
  inputNameValue,
  inputNicknameValue 
} from "../../states/inputValueState";
// Value Check
import {
  inputEmailValueState,
  inputPWValueState,
  inputPWCKValueState,
  inputTelValueState,
  inputNameValueState,
  inputNicknameValueState 
} from "../../states/inputValueState";

import { RegistSection } from "../../components/register/style/registrationStyle";
import { Common } from "../../resources/style/common/commonStyle";

import HistoryBack from "../../components/include/view/HistorybackButton";
import LocationSetting from "../../components/register/view/LocationSetting";

// input components
import InputEmail from "../../components/inputForm/view/InputEmail";
import InputPW from "../../components/inputForm/view/InputPW";
import InputPWCK from "../../components/inputForm/view/InputPWCK";
import InputTel from "../../components/inputForm/view/InputTel";
import InputName from "../../components/inputForm/view/InputName";
import InputNickname from "../../components/inputForm/view/InputNickname";

const Registration = () => {
  const valEmail = useSetRecoilState(inputEmailValue);
  const valPW = useSetRecoilState(inputPWValue);
  const valPWCK = useSetRecoilState(inputPWCKValue);
  const valTel = useSetRecoilState(inputTelValue);
  const valName = useSetRecoilState(inputNameValue);
  const valNickname = useSetRecoilState(inputNicknameValue);

  const checkEmail = useRecoilValue(inputEmailValueState);
  const checkPW = useRecoilValue(inputPWValueState);
  const checkPWCK = useRecoilValue(inputPWCKValueState);
  const checkTel = useRecoilValue(inputTelValueState);
  const checkName = useRecoilValue(inputNameValueState);
  const checkNickname = useRecoilValue(inputNicknameValueState);

  const navigate = useNavigate();
  
  return (
    <RegistSection.RegistFrame>
      <div className="regsit_header flex flex_ai_c">
        <HistoryBack />
        <div className="tit flex flex_jc_c">회원가입</div>
      </div>
      <RegistSection.RegistForm>
        <LocationSetting />
        <InputEmail/>
        <InputPW/>
        <InputPWCK/>
        <InputTel/>
        <InputName/>
        <InputNickname/>
      </RegistSection.RegistForm>
      <Common.Button
        className={
          checkEmail !== 0 &&
          checkPW !== 0 &&
          checkPWCK !== 0 &&
          checkTel !== 0 &&
          checkName !== 0 &&
          checkNickname !== 0
          ? "active" : ""
        }
        style={{ width: "86%" }}
      >
        가입하기
      </Common.Button>
    </RegistSection.RegistFrame>
  );
};

export default Registration;
