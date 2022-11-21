

import { HomeSection } from "../../components/home/style/home";
import ReactKakaoMap from "../../components/home/view/map/ReactKakaoMap";
import HashTag from "../../components/home/view/HashTag";
import LeftMenu from "../../components/home/view/LeftMenu";

const Home = () => {
  
  return (
    <HomeSection.HomeFrame>
      <LeftMenu />
      <HashTag />
      <ReactKakaoMap />
    </HomeSection.HomeFrame>
  );
};

export default Home;
  