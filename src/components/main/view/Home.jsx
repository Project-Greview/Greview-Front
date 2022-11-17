import { HomeSection } from "../style/home";
import ReactKakaoMap from "./map/ReactKakaoMap";
import SearchBar from "./searchBar/SearchBar";

const Home = () => {
  return (
    <HomeSection.HomeFrame>
      <SearchBar/>
      <ReactKakaoMap/>
    </HomeSection.HomeFrame>
  );
};

export default Home;
