import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { setPageInfoState, setLeftMenuState } from "../states/commonState";

import { Common } from "../resources/style/common/commonStyle";
import Navigater from "../components/include/view/Navigater";
import Home from "../pages/home/Home";
import SearchBar from "../components/home/view/searchBar/SearchBar";
import ReviewRouter from "./ReviewRouter";
import MyPageRouter from "./MyPageRouter";
import SaveList from "../pages/save/SaveList";
import SearchLoction from "../pages/searchlocation/SearchLocation";
import ResultList from "../components/home/view/ResultList";

const PageRouter = () => {  
  const location = useLocation();
  
  const pageState = useRecoilValue(setPageInfoState);
  const setPageState = useSetRecoilState(setPageInfoState);

  const leftMenuState = useRecoilValue(setLeftMenuState);
  useEffect(() => {
    setPageState(location.state);
  }, [location.state.tit]);
  
  console.log("페이지 정보", pageState);
  console.log("Left Menu", leftMenuState);

  return (
    <Common.Frame>
      {pageState.value === 0 || pageState.value === 1 ? <SearchBar /> : ""}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/searchlocation" element={<SearchLoction/>}/>
        <Route path="/review/*" element={<ReviewRouter />} />
        <Route path="/mypage/*" element={<MyPageRouter />}/>
        <Route path="/savelist" element={<SaveList />}/>
      </Routes>
      {pageState.value === 0 || pageState.value === 1 || pageState.value === 3 ? <Navigater /> : ""}
      {pageState.value === 0 ? <ResultList /> : ""}
      
       {/* <Navigater /> */}
    </Common.Frame>
  );
};

export default PageRouter;