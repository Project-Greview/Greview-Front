import { Routes, Route } from "react-router-dom";
import ReviewDetail from "../pages/review/ReviewDetail";
import ReviewList from "../pages/review/ReviewList";
import ReviewWrite from "../pages/review/ReviewWrite";
import ReviewCmt from "../pages/review/ReviewCmt";
import HistoryBackHeader from "../components/include/view/HistoryBackHeader";

const ReviewRouter = () => {
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

export default ReviewRouter;