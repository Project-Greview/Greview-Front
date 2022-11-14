import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import images from "../../../resources/img/img";
import { WelcomeSection } from "../style/welcomeStyle";
import { Common } from "../../../resources/style/styled-components/commonStyle";

import { hasAccountState } from "../../../states/recoilCounterState";

import Login from "../../login/view/Login";


const WelcomePage = () => {
  const [hasAccount, setHasAccount] = useRecoilState(hasAccountState);

  const moveLoginpage = () => {
    setHasAccount(true);
  }
  const navigate = useNavigate();

  // PUSH Registration
  const onPushRegist = () => {
    navigate("/regist")
  }

  
  return(
    <WelcomeSection.WelcomeFrame>
      <img src={images.welcomeLogo} alt="" />
      {hasAccount === false ? 
        <div className="first_form flex flex_dir_c">
          <Common.Button onClick={moveLoginpage}>시작하기</Common.Button>
          <div className="has_acc flex flex_jc_c">
            <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
          </div>
          {/* <div className="has_acc flex flex_jc_c">
            <div className="txt flex">이미 계정이 있나요?<div className="cursor_p" onClick={moveLoginpage}>로그인</div></div>
          </div> */}
        </div>
      :
        <Login/>
      }
      
    </WelcomeSection.WelcomeFrame>
  )
}

export default WelcomePage;