import { Common } from "../../../../resources/style/styled-components/commonStyle";
import { SearchBarSection } from "../../style/searchbarStyle";

import images from "../../../../resources/img/img";

const SearchBar = () => {
  return(
    <SearchBarSection.SearchFrame>
      <div className="bars_btn relative cursor_p">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Common.SearchInput>
        <label htmlFor="">
          <img src={images.marker_g} alt=""/>
        </label>
        <input type="text" placeholder="해시태그를 입력해주세요"/>
        <Common.Button>
          <img src={images.search_btn} alt=""/>
        </Common.Button>
      </Common.SearchInput>
    </SearchBarSection.SearchFrame>
  )
}

export default SearchBar;