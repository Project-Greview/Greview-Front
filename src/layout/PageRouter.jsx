import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSetRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import { setPageInfoState, setLeftMenuState, searchKeyword, searchResult } from "../states/commonState";
import { loginState } from "../states/memberState";

import { Common } from "../resources/style/common/commonStyle";
import Navigater from "../components/include/view/Navigater";
import Home from "../pages/home/Home";
import SearchBar from "../components/home/view/searchBar/SearchBar";
import ReviewRouter from "./ReviewRouter";
import MyPageRouter from "./MyPageRouter";
import SaveList from "../pages/save/SaveList";
import SearchLoction from "../pages/searchlocation/SearchLocation";

const PageRouter = () => {
  const location = useLocation();

  const pageState = useRecoilValue(setPageInfoState);
  const setPageState = useSetRecoilState(setPageInfoState);

  const isLogin = useRecoilValue(loginState);

  const leftMenuState = useRecoilValue(setLeftMenuState);

  const Result = useRecoilValue(searchResult);

  const resetState = useResetRecoilState(searchKeyword,searchResult);

  console.log(Result);

  useEffect(() => {
    setPageState(location.state);
    resetState();
  }, [location.state, pageState.value]);

  console.log("페이지 정보", pageState);
  // console.log("로그인", isLogin);
  return (
    <Common.Frame>
      {pageState.value === 0 || pageState.value === 1 ? <SearchBar /> : ""}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/searchlocation" element={<SearchLoction />} />
        <Route path="/review/*" element={<ReviewRouter />} />
        <Route path="/mypage/*" element={<MyPageRouter />} />
        <Route path="/savelist" element={<SaveList />} />
      </Routes>
      {pageState.value === 0 ||
      pageState.value === 1 ||
      pageState.value === 3 ? 
        <Navigater />
      : 
        ""
      }
    </Common.Frame>
  );
};

export default PageRouter;
