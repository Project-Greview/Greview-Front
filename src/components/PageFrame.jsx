import { Routes, Route, useLocation } from "react-router-dom";
import { Common } from "../resources/style/common/commonStyle";
import BottomMenu from "./include/view/BottomMennu";
import Home from "./main/view/Home";
import ReviewList from "./review/view/ReviewList";
import ReviewDetail from "./review/view/ReviewDetail";
import ReviewWrite from "./review/view/ReviewWrite";
import SearchBar from "./main/view/searchBar/SearchBar";

const PageFrame = () => {
  const location = useLocation();
  console.log(location)
  return (
    <Common.Frame>
      {location.state === "review" ? "" : <SearchBar /> }
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/reviewlist" element={<ReviewList/>}/>
        <Route path="/reviewdetail" element={<ReviewDetail/>}/>
        <Route path="/reviewrite" element={<ReviewWrite/>}/>
      </Routes>
      {location.state === "review" ? "" : <BottomMenu /> }
    </Common.Frame>
  );
};

export default PageFrame;
