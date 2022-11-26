import ReactKakaoMap from "../../components/home/view/map/ReactKakaoMap";
import { SearchLocationSection } from "../../components/searchlocation/style/searchlocationStyle";

const SearchLoction = () => {
  return(
    <SearchLocationSection.SearchLocationFrame>
      <div>현재 접속한 동네 이름 표시</div>
      <ReactKakaoMap/>
    </SearchLocationSection.SearchLocationFrame>
  )
}

export default SearchLoction;