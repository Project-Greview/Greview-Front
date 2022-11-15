import { Routes, Route } from "react-router-dom";
import { Common } from "../resources/style/styled-components/commonStyle";
import Home from "./main/view/Home";
import ReviewList from "./review/view/ReviewList";
import ReviewDetail from "./review/view/ReviewDetail";

const PageFrame = () => {
  return(
    <Common.Frame>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/reviewlist" element={<ReviewList/>}/>
        <Route path="/reviewdetail" element={<ReviewDetail/>}/>
      </Routes>
    </Common.Frame>
  )
}

export default PageFrame;