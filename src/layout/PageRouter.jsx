import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { setPageInfoState } from "../states/commonState";

import { Common } from "../resources/style/common/commonStyle";
import Navigater from "../components/include/view/Navigater";
import Home from "../pages/home/Home";
import SearchBar from "../components/home/view/searchBar/SearchBar";
import ReviewRouter from "./ReviewRouter";
import MyPageRouter from "./MyPageRouter";

const PageRouter = () => {  
  const location = useLocation();
  
  const pageState = useRecoilValue(setPageInfoState);
  const setPageState = useSetRecoilState(setPageInfoState);
  useEffect(() => {
    setPageState(location.state);
  }, [location.state.tit]);
  
  console.log("페이지 정보", pageState);
  return (
    <Common.Frame>
      {pageState.value === 0 ? <SearchBar /> : ""}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/review/*" element={<ReviewRouter />} />
        <Route path="/mypage/*" element={<MyPageRouter />}/>
      </Routes>
      {pageState.naviView === true ? <Navigater /> : ""}
      
       {/* <Navigater /> */}
    </Common.Frame>
  );
};

export default PageRouter;
