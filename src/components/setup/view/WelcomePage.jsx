import images from "../../../resources/img/img";
import { WelcomeSection } from "../style/welcomeStyle";

const WelcomePage = () => {
  return(
    <WelcomeSection.WelcomeFrame>
      <img src={images.welcomeLogo} alt="" />
      <div className="flex flex_dir_c">
        <button>시작하기</button>
        <div className="has_acc flex flex_jc_c">
          <div className="txt flex">이미 계정이 있나요?<div className="cursor_p">로그인</div></div>
        </div>
      </div>
    </WelcomeSection.WelcomeFrame>
  )
}

export default WelcomePage;