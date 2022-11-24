import { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import ReviewItems from "../../components/review/view/ReviewItems";

import { setMyPageTabState } from "../../states/tabMenuState";
import { setMyPageFixed } from "../../states/commonState";

import { ReviewListSection } from "../../components/review/style/reviewStyle";



const MyPageActivityList = () => {
  const tabIndex = useRecoilState(setMyPageTabState);

  return (
    <ReviewListSection.ListFrame
      style={{  height:"70%", margin: "0rem -2rem", padding: "0 2rem" }}
      className="mypage_review"
    >
      <li className={`tabmenu_tit flex`}>
        {tabIndex[0] === "1" ? (
          <>
            <div>
              내가 작성한 리뷰<span>(00)</span>
            </div>
          </>
        ) : tabIndex[0] === "2" ? (
          <>
            <div>
              내가 작성한 댓글<span>(00)</span>
            </div>
          </>
        ) : (
          <div className="sub_tabmenu flex">
            <div>
              리뷰<span>(00)</span>
            </div>
            <span>|</span>
            <div>
              댓글<span>(00)</span>
            </div>
          </div>
        )}
      </li>
      {tabIndex[0] === "1" ? (
        <ReviewItems />
      ) : tabIndex[0] === "2" ? (
        <>
          <ReviewItems />
          <ReviewItems />
          <ReviewItems />
          <ReviewItems />
          <ReviewItems />
          <ReviewItems />
          <ReviewItems />
        </>
      ) : (
        ""
      )}
    </ReviewListSection.ListFrame>
  );
};

export default MyPageActivityList;
