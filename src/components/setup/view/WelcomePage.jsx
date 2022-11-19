import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import images from "../../../resources/img/img";
import { WelcomeSection } from "../style/welcomeStyle";
import { Common } from "../../../resources/style/common/commonStyle";

import { hasAccountState } from "../../../states/commonState";

import Login from "../../../pages/login/Login";


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
        </div>
      :
        <Login/>
      }
      
    </WelcomeSection.WelcomeFrame>
  )
}

export default WelcomePage;