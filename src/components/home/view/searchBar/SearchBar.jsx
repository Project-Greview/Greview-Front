import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { Common } from "../../../../resources/style/common/commonStyle";
import { SearchBarSection } from "../../style/searchbarStyle";

import images from "../../../../resources/img/img";

import SearchBtn from "./SearchBtn";

import { onToggleSearchType, setLeftMenuState, searchKeyword, setPageInfoState } from "../../../../states/commonState";
import HistoryBack from "../../../include/view/HistorybackButton";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchType, setSearchType] = useRecoilState(onToggleSearchType);
  const pageState = useRecoilState(setPageInfoState);
  const [result, setResult] = useState("");
  const getKeyword = useSetRecoilState(searchKeyword);
  const [place, setPlace] = useState("");
  const [hashTag, setHashTag] = useState("");
  const navigate = useNavigate();


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
    navigate(
      "/seachresult", 
      {state: { 
        value: 1,
        tit: "검색결과",
        naviView: false
      }});
  }
  useEffect(() => {
  },[getKeyword]);
  
  console.log(pageState);
  return (
    <SearchBarSection.SearchFrame>
      {pageState[0].value === 0 ? 
      
        <div className="bars_btn relative cursor_p" onClick={onToggleLeftMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        : 
        <HistoryBack/>
      }
      <Common.SearchInput onSubmit={handleSubmit}>
        {pageState[0].value === 0 ?
          <label htmlFor="" onClick={onChangeSearchType}>
            <img src={searchType === "location" ? images.marker_g : images.marker_c} alt=""/>
          </label>
          :
          <label htmlFor="">
            <img src={images.marker_c} alt=""/>
          </label>
        }
          {pageState[0].value === 0 ?
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
            :
              <input
                type="text"
                placeholder="해시태그를 입력해주세요"
                onChange={onChangeHashTagKeyword}
                style={{ width: "100%" }}
                value={hashTag}
              />
          }
        <Common.Button className={`${pageState[0].value === 0 ? `${searchType}` : "tag"}`} type={'submit'} onClick={searchKeywordPush}>
          <SearchBtn />
        </Common.Button>
      </Common.SearchInput>
    </SearchBarSection.SearchFrame>
  );
};

export default SearchBar;
