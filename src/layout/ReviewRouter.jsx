import { Routes, Route } from "react-router-dom";
import ReviewDetail from "../pages/review/ReviewDetail";
import ReviewList from "../pages/review/ReviewList";
import ReviewWrite from "../pages/review/ReviewWrite";
import ReviewCmt from "../pages/review/ReviewCmt";

import StoreReview from "../components/review/view/StoreReview";
import HistoryBackHeader from "../components/include/view/HistoryBackHeader";
import { useRecoilValue } from "recoil";
import { setPageInfoState } from "../states/commonState";

const ReviewRouter = () => {
  const pageInfo = useRecoilValue(setPageInfoState);
  return(
    <>
      {pageInfo.value === 10 ? "" : <HistoryBackHeader/>}
      <Routes>
        <Route path="/reviewrite" element={<ReviewWrite/>}/>
        <Route path="/reviewlist" element={<ReviewList/>}/>
        <Route path="/reviewdetail" element={<ReviewDetail/>}/>
        <Route path="/reviewcmt" element={<ReviewCmt/>}/>
        <Route path="/storereview" element={<StoreReview/>}/>
      </Routes>
    </>
  )
}

export default ReviewRouter;