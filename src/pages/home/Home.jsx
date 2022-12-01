import { useRecoilValue } from "recoil";

import { searchResult } from "../../states/commonState";

import { HomeSection } from "../../components/home/style/home";
import KakaoMap from "../../components/home/view/map/KakaoMap";
import HashTag from "../../components/home/view/HashTag";
import LeftMenu from "../../components/home/view/LeftMenu";
import ResultList from "../../components/home/view/ResultList";

const Home = () => {
  const Result = useRecoilValue(searchResult);
  console.log(Result)
  return (
    <HomeSection.HomeFrame>
      <LeftMenu />
      <HashTag />
      <KakaoMap />
      {Result !== "ERROR" ?
        <ResultList />
          :
        null
      }
    </HomeSection.HomeFrame>
  );
};

export default Home;
