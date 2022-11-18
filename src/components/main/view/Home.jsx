import { HomeSection } from "../style/home";
import ReactKakaoMap from "./map/ReactKakaoMap";
import HashTag from "./map/HashTag";

const Home = () => {
  return (
    <HomeSection.HomeFrame>
      <HashTag />
      <ReactKakaoMap />
    </HomeSection.HomeFrame>
  );
};

export default Home;
