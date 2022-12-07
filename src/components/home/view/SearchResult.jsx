import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import { searchResult } from "../../../states/commonState";
import { setSearchTabState } from "../../../states/tabMenuState";

import { SearchResultSection } from "../style/searchResultStyle";
import LocationResult from "./LocationResult";

const SearchResult = () => {

  const setTabMenuValue = useSetRecoilState(setSearchTabState);
  const tabIndex = useRecoilState(setSearchTabState);
  const onToggleTabMenu = (e) => {
    const indexNum = e.currentTarget.getAttribute("data-tabindex");
    setTabMenuValue(indexNum);
  };
  const keywordResultItem = useRecoilValue(searchResult);

  return(
    <SearchResultSection.ListFrame>
      <div className="tab">
        <ul>
          <li data-tabindex="1" onClick={onToggleTabMenu} className={tabIndex[0] === "1" ? "on" : ""}>리뷰</li>
          <li data-tabindex="2" onClick={onToggleTabMenu} className={tabIndex[0] === "2" ? "on" : ""}>장소명</li>
        </ul>
      </div>
      <div className="result_list">
        <div className="result_num flex">
          <p>
            <strong>{tabIndex[0] === "1" ? 
            "" 
            : 
            keywordResultItem.length}개</strong>의 검색결과가 있습니다.
          </p>
          <select name="" id="">
            <option value="">최신순</option>
            <option value="">추천순</option>
          </select>
        </div>
        <ul>
          {tabIndex[0] === "1" ? 
            "on" 
          : 
            <LocationResult resultItem={keywordResultItem}/>
          }
        </ul>
      </div>
    </SearchResultSection.ListFrame>
  )
}

export default SearchResult;