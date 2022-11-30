import KakaoMap from "../../components/home/view/map/KakaoMap";
import ListHashTag from "../../components/include/view/ListHashTag";
import HashTag from "../../components/review/view/HashTag";
import { SaveListSection } from "../../components/save/style/saveListStyle";
import SaveItem from "../../components/save/view/SaveList";
import { SearchLocationSection } from "../../components/searchlocation/style/searchlocationStyle";

const SearchLoction = () => {
  return(
    <SearchLocationSection.SearchLocationFrame>
      <SearchLocationSection.TopSection>
        <p className="location_name">현재 접속한 동네 이름 표시</p>
        <KakaoMap/>
      </SearchLocationSection.TopSection>
      <SearchLocationSection.BottomSection>
        <p className="section_tit">우리동네 Best 태그</p>
        <div className="best_tag_list">
          <ListHashTag/>
        </div>
        <p className="section_tit">우리동네 실시간 리뷰</p>
        <SaveListSection.ListFrame>
          <SaveItem/>
        </SaveListSection.ListFrame>
      </SearchLocationSection.BottomSection>
    </SearchLocationSection.SearchLocationFrame>
  )
}

export default SearchLoction;