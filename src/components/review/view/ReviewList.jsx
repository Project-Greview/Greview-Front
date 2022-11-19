import testImages from "../../../resources/img/review.jpg";

import { useNavigate, useLocation } from "react-router-dom";
import images from "../../../resources/img/img";
import { ReviewListSection } from "../style/reviewStyle";
import { Common } from "../../../resources/style/common/commonStyle";

const ReviewList = () => {
  const navigate = useNavigate();
  const onPushDetail = () => {
    navigate("/review/reviewdetail", {state:{tit: "리뷰상세"} })
  };
  const location = useLocation();
  console.log(location);
  return(
    <ReviewListSection.ListFrame>
      <Common.Reveiw>
        <div className="review_wrap">
          <div className="profile flex" onClick={onPushDetail}>
            <div className="picture">
              <img src={testImages} alt="" />
            </div>
            <div className="userInfo">
              <p className="name">춤추는제이지1</p>
              <p className="date">2022년 11월 5일</p>
            </div>
            <div className="more"></div>
          </div>
          <div children className="thumbnail flex">
            <img src={testImages} alt="" />
            <img src={testImages} alt="" />
          </div>
          <p className="review_txt">
            곱창이 맛없을 수 없지만 여긴 정말 맛있습니다. 2시간 반 웨이팅을 했지만 먹으니 전부 용서되는 맛,,
          </p>
          <div className="hashtag_wrap">
            <div className="overBox">
              <span className="hashtag">맛집</span>
              <span className="hashtag">친절해요</span>
              <span className="hashtag">웨이팅필수</span>
            </div>
          </div>
          <div className="cmt_wrap">
            <span className="thumb">10</span>
            <span className="cmt">2</span>
          </div>
        </div>

        <div className="review_wrap">
          <div className="profile flex" onClick={onPushDetail}>
            <div className="picture">
              <img src={testImages} alt="" />
            </div>
            <div className="userInfo">
              <p className="name">춤추는제이지</p>
              <p className="date">2022년 11월 5일</p>
            </div>
            <div className="more"></div>
          </div>
          <div children className="thumbnail flex">
            <img src={testImages} alt="" />
            <img src={testImages} alt="" />
          </div>
          <p className="review_txt">
            곱창이 맛없을 수 없지만 여긴 정말 맛있습니다. 2시간 반 웨이팅을 했지만 먹으니 전부 용서되는 맛,,
          </p>
          <div className="hashtag_wrap">
            <div className="overBox">
              <span className="hashtag">맛집</span>
              <span className="hashtag">친절해요</span>
              <span className="hashtag">웨이팅필수</span>
            </div>
          </div>
          <div className="cmt_wrap">
            <button className="thumb" type="button">10</button>
            <button className="cmt" type="button">2</button>
          </div>
        </div>
      </Common.Reveiw>
    </ReviewListSection.ListFrame>
  )
}

export default ReviewList;