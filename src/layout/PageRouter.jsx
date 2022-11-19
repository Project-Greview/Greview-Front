import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import { setPageTitleState } from "../states/commonState";

import { Common } from "../resources/style/common/commonStyle";
import Navigater from "../components/include/view/Navigater";
import Home from "../components/main/view/Home";
import SearchBar from "../components/main/view/searchBar/SearchBar";
import ReviewRouter from "./ReviewRouter";
import MyPageRouter from "./MyPageRouter";

const PageRouter = () => {  
  const location = useLocation();
  const setPageTitle = useSetRecoilState(setPageTitleState);
  useEffect(() => {
    setPageTitle(location.state);
  }, [location.state.tit]);
  
  const pageInfo = useRecoilValue(setPageTitleState);
  console.log("페이지 정보", pageInfo);
  return (
    <Common.Frame>
      {pageInfo.value === 0 ? <SearchBar /> : ""}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/review/*" element={<ReviewRouter />} />
        <Route path="/mypage/*" element={<MyPageRouter />}/>
      </Routes>
      {pageInfo.naviView === true ? <Navigater /> : ""}
      
       {/* <Navigater /> */}
    </Common.Frame>
  );
};

export default PageRouter;
