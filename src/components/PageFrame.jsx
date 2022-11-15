import { Routes, Route } from "react-router-dom";
import { Common } from "../resources/style/styled-components/commonStyle";
import BottomMenu from "./include/view/BottomMennu";
import Home from "./main/view/Home";
import ReviewList from "./review/view/ReviewList";
import ReviewDetail from "./review/view/ReviewDetail";
import SearchBar from "./main/view/searchBar/SearchBar";
const PageFrame = () => {
  return(
    <Common.Frame>
      <SearchBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/reviewlist" element={<ReviewList/>}/>
        <Route path="/reviewdetail" element={<ReviewDetail/>}/>
      </Routes>
      <BottomMenu/>
    </Common.Frame>
  )
}

export default PageFrame;