import { HomeSection } from "../../components/home/style/home";
import ReactKakaoMap from "../../components/home/view/map/ReactKakaoMap";
import HashTag from "../../components/home/view/HashTag";

const Home = () => {
  return (
    <HomeSection.HomeFrame>
      <HashTag />
      <ReactKakaoMap />
    </HomeSection.HomeFrame>
  );
};

export default Home;
