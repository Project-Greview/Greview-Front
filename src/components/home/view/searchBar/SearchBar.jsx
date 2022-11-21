import { useRecoilState, useSetRecoilState } from "recoil";

import { Common } from "../../../../resources/style/common/commonStyle";
import { SearchBarSection } from "../../style/searchbarStyle";

import images from "../../../../resources/img/img";

import SearchBtn from "./SearchBtn";

import { onToggleSearchType, setLeftMenuState } from "../../../../states/commonState";

const SearchBar = () => {
  const [searchType, setSearchType] = useRecoilState(onToggleSearchType);

  const setLeftMenu = useSetRecoilState(setLeftMenuState);

  const onChangeSearchType = () => {
    searchType === "tag" ? setSearchType("location") : setSearchType("tag");
  };
  
  const onToggleLeftMenu = () => {
    setLeftMenu(true)
  }

  return (
    <SearchBarSection.SearchFrame>
      <div className="bars_btn relative cursor_p" onClick={onToggleLeftMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Common.SearchInput>
        <label htmlFor="" onClick={onChangeSearchType}>
          <img src={
            searchType === "location" ? images.marker_g : images.marker_c
          } alt=""/>
        </label>
        <input
          type="text"
          placeholder={
            searchType === "location"
              ? "장소명을 입력해주세요"
              : "해시태그를 입력해주세요"
          }
          style={{ width: "100%" }}
        />
        <Common.Button className={searchType}>
          <SearchBtn />
        </Common.Button>
      </Common.SearchInput>
    </SearchBarSection.SearchFrame>
  );
};

export default SearchBar;
