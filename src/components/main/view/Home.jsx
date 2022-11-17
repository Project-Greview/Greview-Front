import { HomeSection } from "../style/home";
import KakaoMapAPI from "./map/Map";
import ReactkakaoMap from "./map/ReactKakaoMap";
import SearchBar from "./searchBar/SearchBar";

const Home = () => {
  return (
    <HomeSection.HomeFrame>
      {/* <SearchBar/> */}
      {/* <KakaoMapAPI /> */}
      <ReactkakaoMap />
    </HomeSection.HomeFrame>
  );
};

export default Home;
