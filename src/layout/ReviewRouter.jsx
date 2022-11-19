import { Routes, Route } from "react-router-dom";
import ReviewDetail from "../components/review/view/ReviewDetail";
import ReviewList from "../components/review/view/ReviewList";
import ReviewWrite from "../components/review/view/ReviewWrite";
import ReviewCmt from "../components/review/view/ReviewCmt";
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