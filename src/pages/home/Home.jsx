import { useRecoilValue } from "recoil";

import { searchResult } from "../../states/commonState";

import { HomeSection } from "../../components/home/style/home";
import KakaoMap from "../../components/home/view/map/KakaoMap";
import HashTag from "../../components/home/view/HashTag";
import LeftMenu from "../../components/home/view/LeftMenu";
import ResultList from "../../components/home/view/ResultList";
import SearchResult from "../../components/home/view/SearchResult";

const Home = () => {
  const Result = useRecoilValue(searchResult);
  return (
    <>
      <HomeSection.HomeFrame>
        <LeftMenu />
        
        {Result !== "ERROR" && Result.length !== 0?
          // <ResultList />
          <SearchResult/>
            :
          <>
            <HashTag />
            <KakaoMap />
          </>
        }
        {/* <KakaoMap /> */}
        
      </HomeSection.HomeFrame>
      {/* {Result !== "ERROR" && Result.length !== 0?
          // <ResultList />
          <SearchResult/>
            :
          null
        } */}
    </>
  );
};

export default Home;
