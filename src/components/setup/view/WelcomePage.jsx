import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import images from "../../../resources/img/img";
import { WelcomeSection } from "../style/welcomeStyle";
import { Common } from "../../../resources/style/styled-components/commonStyle";

const WelcomePage = () => {
  const navigate = useNavigate();

  // PUSH Registration
  const onPushRegist = () => {
    navigate("/regist")
  }
  return(
    <WelcomeSection.WelcomeFrame>
      <img src={images.welcomeLogo} alt="" />

      <div className="flex flex_dir_c">
        <button onClick={onPushRegist}>시작하기</button>
        <div className="has_acc flex flex_jc_c">
          <div className="txt flex">이미 계정이 있나요?<div className="cursor_p">로그인</div></div>
        </div>
      </div>

      <div className="login_form flex flex_dir_c">
        <Common.Input className="login_id">
          <input type="text" placeholder="아이디"/>
          <label htmlFor=""></label>
        </Common.Input>
        <Common.Input className="login_pw">
          <input type="password" placeholder="비밀번호"/>
          <label htmlFor=""></label>
        </Common.Input>
        <button>로그인</button>
        <div className="has_acc flex flex_jc_c">
          <div className="txt flex">처음이신가요?<div onClick={onPushRegist} className="cursor_p">회원가입</div></div>
        </div>
      </div>
    </WelcomeSection.WelcomeFrame>
  )
}

export default WelcomePage;