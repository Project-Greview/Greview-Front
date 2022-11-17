import { HomeSection } from "../style/home";
import ReactKakaoMap from "./map/ReactKakaoMap";
import SearchBar from "./searchBar/SearchBar";
import HashTag from "./map/HashTag";

const Home = () => {
  return (
    <HomeSection.HomeFrame>
      {/* <SearchBar/> */}
      <HashTag/>
      <ReactKakaoMap/>
    </HomeSection.HomeFrame>
  );
};

export default Home;
