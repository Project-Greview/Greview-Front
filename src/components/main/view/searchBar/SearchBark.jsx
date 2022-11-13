import { Common } from "../../../../resources/style/styled-components/commonStyle";
import { SearchBarSection } from "../../style/searchbarStyle";

const SearchBar = () => {
  return(
    <SearchBarSection.SearchFrame>
      <div className="cursor_p">

      </div>
      <Common.Input>
        <label htmlFor=""></label>
        <input type="text"/>
      </Common.Input>
    </SearchBarSection.SearchFrame>
  )
}

export default SearchBar;