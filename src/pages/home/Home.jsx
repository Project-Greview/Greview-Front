

import { HomeSection } from "../../components/home/style/home";
import KakaoMap from "../../components/home/view/map/KakaoMap";
import HashTag from "../../components/home/view/HashTag";
import LeftMenu from "../../components/home/view/LeftMenu";

const Home = () => {
  
  return (
    <HomeSection.HomeFrame>
      <LeftMenu />
      <HashTag />
      <KakaoMap/>
    </HomeSection.HomeFrame>
  );
};

export default Home;
  