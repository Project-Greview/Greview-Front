import { Routes, Route } from "react-router-dom";
import ReviewDetail from "./view/ReviewDetail";
import ReviewList from "./view/ReviewList";
import ReviewWrite from "./view/ReviewWrite";

const ReviewRoute = () => {
  return(
    <Routes>
      <Route path="/reviewrite" element={<ReviewWrite/>}/>
      <Route path="/reviewlist" element={<ReviewList/>}/>
      <Route path="/reviewdetail" element={<ReviewDetail/>}/>
    </Routes>
  )
}

export default ReviewRoute;