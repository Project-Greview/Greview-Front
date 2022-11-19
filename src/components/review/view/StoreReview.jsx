import testImages from "../../../resources/img/review.jpg";

import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import images from "../../../resources/img/img";
import { ReviewListSection } from "../style/reviewStyle";
import { Common } from "../../../resources/style/common/commonStyle";
import HistoryBack from "../../include/view/HistorybackButton";



const ReviewList = () => {
  const navigate = useNavigate();
  const onPushDetail = () => {
    navigate("/review/reviewdetail", {state: {value: 6, tit: "리뷰상세"}})
  };

  const text = [
    "맛집맛집맛","친절","웨이팅","예약가능","친절해요",
    "맛집맛집맛","친절","웨이팅","예약가능","친절해요","맛집맛집맛",
    "친절","웨이팅","예약가능","친절해요",  
    "맛집맛집맛","친절","웨이팅","예약가능","친절해요"
  ];
  const listItems = text.map((text) =>
    <li key={Math.random()} className="hashtag">
      {text}
    </li>
  );

  const hashTag = useRef();
  const moreTag = (e) => {
    hashTag.current.classList.add('active');
    e.target.classList.add('active');
  }
  
  const location = useLocation();
  console.log(location);
  return(
    <ReviewListSection.ListFrame>
      <div className="store_header">
        <HistoryBack />
        <div className="logo">
          <img src={images.marker_c} alt="" />
        </div>
      </div>
      <div className="store_info">
        <h1>제일곱창</h1>
        <div className="flex_jc_sb flex_flow_w">
          <div className="address"><img src={images.map} alt="위치" />서울 성동구 마조로 17</div>
          <div className="star"><img src={images.star_on} alt="별점" />4.5</div>
        </div>
        
        <div className="btn_box flex_jc_sb flex_dir_c flex_flow_w">
          <Common.Button style={{ width: "24%"}} type="button" className="save"><img src={images.btn_save} alt="저장" /></Common.Button>
          <Common.Button style={{ width: "74%"}} type="button">리뷰쓰기</Common.Button>  
        </div>
        <img src={images.greview_tag} alt="greview tag" />
        <div className="hashtag_wrap store" ref={hashTag}>
          <ul>
            {listItems}
          </ul>
          {/* 버튼 바꿀예정 */}
          <button className="btn_arrow" onClick={moreTag}>
            <img src={images.btn_arrow_top} alt="더 보기" />
          </button>
        </div>
        
        <div className="progress_wrap">
          <div className="progress">
            <div className="bar" style={{width: "85%"}}></div>
          </div>
          <div className="flex_jc_sb flex_flow_w">
            <div className="positive">긍정적 <span className="num">85%</span></div>
            <div className="negative">부정적 <span className="num">15%</span></div>
          </div>
          
        </div>

      </div>
      
      <Common.Reveiw>
        <img className="greview" src={images.greview} alt="greview" />
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