import { Routes, Route } from "react-router-dom";
import ReviewDetail from "./view/ReviewDetail";
import ReviewList from "./view/ReviewList";
import ReviewWrite from "./view/ReviewWrite";
import ReviewCmt from "./view/ReviewCmt";
import HistoryBackHeader from "../include/view/HistoryBackHeader";

const ReviewRoute = () => {
  return(
    <>
      <HistoryBackHeader/>
      <Routes>
        <Route path="/reviewrite" element={<ReviewWrite/>}/>
        <Route path="/reviewlist" element={<ReviewList/>}/>
        <Route path="/reviewdetail" element={<ReviewDetail/>}/>
        <Route path="/reviewcmt" element={<ReviewCmt/>}/>
      </Routes>
    </>
  )
}

export default ReviewRoute;