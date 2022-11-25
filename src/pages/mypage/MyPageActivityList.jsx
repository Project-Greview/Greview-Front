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
      style={{ margin: "0rem -2rem", padding: "0 2rem" }}
      className="mypage_review"
    >
      {tabIndex[0] === "1" ? (
        <ReviewItems />
      ) : tabIndex[0] === "2" ? (
        <>
          <ReviewItems />
          <ReviewItems className="testss"/>
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
