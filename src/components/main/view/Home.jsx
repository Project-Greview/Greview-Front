import { HomeSection } from "../style/home";
import KakaoMapAPI from "./map/Map";
import SearchBar from "./searchBar/SearchBark";

const Home = () => {
  return(
    <HomeSection.HomeFrame>
      <SearchBar/>
      <KakaoMapAPI/>
    </HomeSection.HomeFrame>
  )
}

export default Home;