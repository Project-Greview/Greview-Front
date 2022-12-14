import testImages from "../../resources/img/review.jpg";

import { useNavigate } from "react-router-dom";
import { ReviewDetailSection } from "../../components/review/style/reviewStyle";
import { Common } from "../../resources/style/common/commonStyle";
import HashTag from "../../components/review/view/HashTag";

const ReviewDetail = () => {

  const navigate = useNavigate();
  const onPushCmt = () => {
    // navigate("/review/reviewcmt", {state: {tit: "댓글"}})
    navigate("/review/storereview", {state: {value: 10, tit: "가게리뷰"}})
  };

  return(
    <ReviewDetailSection.ListFrame>
      <div className="review_wrap">
        <div className="profile flex" href="">
          <div className="picture">
            <img src={testImages} alt="" />
          </div>
          <div className="userInfo">
            <p className="name">춤추는제이지</p>
            <p className="date">2022년 11월 5일</p>
          </div>
          <div className="more"></div>
        </div>
        <div children className="reveiw_img">
          <img src={testImages} alt="" />
        </div>
        <p className="review_txt">
          곱창이 맛없을 수 없지만 여긴 정말 맛있습니다. 2시간 반 웨이팅을 했지만 먹으니 전부 용서되는 맛,,
          곱창이 맛없을 수 없지만 여긴 정말 맛있습니다. 2시간 반 웨이팅을 했지만 먹으니 전부 용서되는 맛,,
          곱창이 맛없을 수 없지만 여긴 정말 맛있습니다. 2시간 반 웨이팅을 했지만 먹으니 전부 용서되는 맛,,
        </p>
        <div className="hashtag_wrap">
          <div className="overBox">
            <HashTag tagName={"맛집"}/>
            <HashTag tagName={"친절해요"}/>
            <HashTag tagName={"웨이팅필수"}/>
          </div>
        </div>
        <div className="place_wrap flex">
            <img src={testImages} alt="" />
            <div className="place_info">
              <p className="name">제일곱창</p>
              <p className="address">성동구 홍익동</p>
            </div>
            <div className="more"></div>
          </div>
      </div>
      <div className="cmt_wrap">
          <span className="thumb" type="button">10</span>
          <span className="cmt" type="button" onClick={onPushCmt}>2</span>
      </div>
    </ReviewDetailSection.ListFrame>
  )
}

export default ReviewDetail;