
import { useNavigate } from "react-router-dom";
import { ReviewListSection } from "../../components/review/style/reviewStyle";
import { Common } from "../../resources/style/common/commonStyle";
import ReviewItems from "../../components/review/view/ReviewItems";

const ReviewList = () => {
  // const navigate = useNavigate();
  // const onPushDetail = () => {
  //   navigate("/review/reviewdetail", {state: {value: 6, tit: "리뷰상세"}})
  // };
  
  return(
    <ReviewListSection.ListFrame>

        <ReviewItems/>
        <ReviewItems/>
        <ReviewItems/>
        
    </ReviewListSection.ListFrame>
  )
}

export default ReviewList;