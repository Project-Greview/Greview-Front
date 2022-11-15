import testImages from "../../../resources/img/review.jpg";

import { useNavigate } from "react-router-dom";
import images from "../../../resources/img/img";
import { ReivewListSection } from "../style/reviewStyle";
import { Common } from "../../../resources/style/styled-components/commonStyle";

import HistoryBack from "../../../resources/style/styled-components/Historyback";

const ReivewList = () => {
  const navigate = useNavigate();
  const onPushDetail = () => {
    navigate("/review/reviewdetail")
  }
    

  return(
    <ReivewListSection.ListFrame>
      <div className="review_header flex flex_ai_c">
        <HistoryBack/>
        <div className="tit flex flex_jc_c">리뷰목록</div>
      </div>
      <Common.Reveiw>
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
            <span className="thumb">10</span>
            <span className="cmt">2</span>
          </div>
        </div>
      </Common.Reveiw>
    </ReivewListSection.ListFrame>
  )
}

export default ReivewList;