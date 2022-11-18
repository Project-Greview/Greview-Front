import { Routes, Route, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { Common } from "../resources/style/common/commonStyle";
import Navigater from "./include/view/Navigater";
import Home from "./main/view/Home";
import SearchBar from "./main/view/searchBar/SearchBar";
import ReviewRoute from "./review/ReviewRoute";
import MyPageRoute from "./mypage/MyPageRoute";

const PageFrame = () => {
  const location = useLocation();

  return (
    <Common.Frame>
      {location.state.value === 0 ? <SearchBar /> : ""}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/review/*" element={<ReviewRoute />} />
        <Route path="/mypage/*" element={<MyPageRoute />} />
      </Routes>
      {location.state === "review" ? "" : <Navigater />}
    </Common.Frame>
  );
};

export default PageFrame;
