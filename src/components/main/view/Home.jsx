import { HomeSection } from "../style/home";
import KakaoMapAPI from "./map/Map";
import SearchBar from "./searchBar/SearchBar";

const Home = () => {
  return(
    <HomeSection.HomeFrame>
      {/* <SearchBar/> */}
      <KakaoMapAPI/>

    </HomeSection.HomeFrame>
  )
}

export default Home;