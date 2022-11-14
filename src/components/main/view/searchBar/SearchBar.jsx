import { useRecoilState, useSetRecoilState } from "recoil";

import { Common } from "../../../../resources/style/styled-components/commonStyle";
import { SearchBarSection } from "../../style/searchbarStyle";

import images from "../../../../resources/img/img";

import SearchBtn from "./SearchBtn";

import { onToggleSearchType } from "../../../../states/recoilCounterState";

const SearchBar = () => {
  const [searchType, setSearchType] = useRecoilState(onToggleSearchType);

  const onChangeSearchType = () => {
    searchType === "tag" ? setSearchType("location") : setSearchType("tag")
  }

  return(
    <SearchBarSection.SearchFrame>
      <div className="bars_btn relative cursor_p">
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
        <input type="text" placeholder={
          searchType === "location" ?
          "해시태그를 입력해주세요"
          :
          "장소명을 입력해주세요"
        } style={{width:"100%"}}/>
        <Common.Button className={searchType}>
          {/* <img src={images.search_btn} alt=""/> */}
          {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 11.0001H11.71L11.43 10.7301C12.63 9.33014 13.25 7.42014 12.91 5.39014C12.44 2.61014 10.12 0.390137 7.32 0.0501373C3.09 -0.469863 -0.47 3.09014 0.05 7.32014C0.39 10.1201 2.61 12.4401 5.39 12.9101C7.42 13.2501 9.33 12.6301 10.73 11.4301L11 11.7101V12.5001L15.25 16.7501C15.66 17.1601 16.33 17.1601 16.74 16.7501C17.15 16.3401 17.15 15.6701 16.74 15.2601L12.5 11.0001ZM6.5 11.0001C4.01 11.0001 2 8.99014 2 6.50014C2 4.01014 4.01 2.00014 6.5 2.00014C8.99 2.00014 11 4.01014 11 6.50014C11 8.99014 8.99 11.0001 6.5 11.0001Z" fill="#959292"/>
          </svg> */}
          <SearchBtn/>
        </Common.Button>
      </Common.SearchInput>
    </SearchBarSection.SearchFrame>
  )
}

export default SearchBar;