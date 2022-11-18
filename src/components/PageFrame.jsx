import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import { setPageTitleState } from "../states/recoilCounterState";

import { Common } from "../resources/style/common/commonStyle";
import Navigater from "./include/view/Navigater";
import Home from "./main/view/Home";
import SearchBar from "./main/view/searchBar/SearchBar";
import ReviewRoute from "./review/ReviewRoute";
import MyPageRoute from "./mypage/MyPageRoute";

const PageFrame = () => {  
  const location = useLocation();
  const setPageTitle = useSetRecoilState(setPageTitleState);
  useEffect(() => {
    setPageTitle(location.state);
  }, [location.state.tit]);
  
  const pageInfo = useRecoilValue(setPageTitleState);

  return (
    <Common.Frame>
      {pageInfo.value === 0 ? <SearchBar /> : ""}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/review/*" element={<ReviewRoute />} />
        <Route path="/mypage/*" element={<MyPageRoute />} />
      </Routes>
      {pageInfo.value === 0 || 3 ? <Navigater /> : ""}
    </Common.Frame>
  );
};

export default PageFrame;
