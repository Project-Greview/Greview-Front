import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import images from "../../resources/img/img";
import { SpalshSection } from "../../components/splash/style/splashStyle";
import { Common } from "../../resources/style/common/commonStyle";

import { hasAccountState } from "../../states/commonState";

import Login from "../login/Login";

const Splash = () => {
  const [hasAccount, setHasAccount] = useRecoilState(hasAccountState);
  const moveLoginpage = () => {
    setHasAccount(true);
  };
  const navigate = useNavigate();

  const [loading, setLoading] = useState(null);

  // PUSH Registration
  const onPushRegist = () => {
    navigate("/regist")
  };
  return(
    <SpalshSection.SpalshFrame>
      <img src={images.welcomeLogo} alt="" className="main_logo"/>
      {hasAccount === false ? 
        <div className="first_form flex flex_dir_c">
          {/* <Common.Button onClick={moveLoginpage}>시작하기</Common.Button> */}
          <Common.Button onClick={() => {navigate("/login")}}>시작하기</Common.Button>
          <div className="has_acc flex flex_jc_c">
            <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
          </div>
        </div>
      :
        <Login/>
      }
    </SpalshSection.SpalshFrame>
  )
};

export default Splash;