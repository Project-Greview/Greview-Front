import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState} from "recoil";

import { Common } from "../../../../resources/style/common/commonStyle";
import { SearchBarSection } from "../../style/searchbarStyle";

import images from "../../../../resources/img/img";

import SearchBtn from "./SearchBtn";

import { onToggleSearchType, setLeftMenuState, searchKeyword } from "../../../../states/commonState";

const SearchBar = () => {
  const [searchType, setSearchType] = useRecoilState(onToggleSearchType);
  const [result, setResult] = useState("");
  const getKeyword = useSetRecoilState(searchKeyword);
  const [place, setPlace] = useState("");
  const [hashTag, setHashTag] = useState("");

  const onChangePlaceKeyword = (e) => {
    e.preventDefault();
    setPlace(e.target.value);
  };

  const onChangeHashTagKeyword = (e) => {
    e.preventDefault();
    setHashTag(e.target.value);
  };
  const setLeftMenu = useSetRecoilState(setLeftMenuState);

  const onChangeSearchType = () => {
    searchType === "tag" ? setSearchType("location") : setSearchType("tag");
  };
  
  const handleSubmit = (e) => {
    // e.preventDefault();
    setResult(place);
    setPlace("");
  };

  const onToggleLeftMenu = () => {
    setLeftMenu(true);
  };

  const searchKeywordPush = () => {
    getKeyword(place);
  }
  useEffect(() => {
  },[getKeyword]);
  
  return (
    <SearchBarSection.SearchFrame>
      <div className="bars_btn relative cursor_p" onClick={onToggleLeftMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Common.SearchInput onSubmit={handleSubmit}>
        <label htmlFor="" onClick={onChangeSearchType}>
          <img src={searchType === "location" ? images.marker_g : images.marker_c} alt=""/>
        </label>
        <input
          type="text"
          placeholder={
            searchType === "location"
              ? "장소명을 입력해주세요"
              : "해시태그를 입력해주세요"
          }
          onChange={searchType === "location" ? onChangePlaceKeyword : onChangeHashTagKeyword}
          style={{ width: "100%" }}
          value={searchType === "location" ? place : hashTag}
        />
        <Common.Button className={searchType} type={'submit'} onClick={searchKeywordPush}>
          <SearchBtn />
        </Common.Button>
      </Common.SearchInput>
    </SearchBarSection.SearchFrame>
  );
};

export default SearchBar;
