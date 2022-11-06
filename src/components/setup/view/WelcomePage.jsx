import images from "../../../resources/img/img";
import { WelcomeSection } from "../style/welcomeStyle";

const WelcomePage = () => {
  return(
    <WelcomeSection.WelcomeFrame>
      <img src={images.welcomeLogo} alt="" />
    </WelcomeSection.WelcomeFrame>
  )
}

export default WelcomePage;