import { useInView } from 'react-intersection-observer';
import { useRecoilState } from "recoil";

import ReviewItems from "../../components/review/view/ReviewItems";

import { setMyPageTabState } from "../../states/tabMenuState";

import { ReviewListSection } from "../../components/review/style/reviewStyle";


const MyPageActivityList = () => {
  const tabIndex = useRecoilState(setMyPageTabState);
  const { ref, inView, entry } = useInView({
    threshold: 1.0,
  });

  console.log(inView)
  return (
    <ReviewListSection.ListFrame
      style={{ margin: "0rem -2rem", padding: "0 2rem" }}
      
    >
      <div className="tabmenu_tit flex">
        {tabIndex[0] === "1" ? (
          <>
            <div>
              내가 작성한 리뷰<span>(00)</span>
            </div>
          </>
        ) : tabIndex[0] === "2" ? (
          <>
            <div ref={ref}>
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
      </div>
      {tabIndex[0] === "1" ? (
        <ReviewItems />
      ) : tabIndex[0] === "2" ? (
        <>
          <ReviewItems />
          <ReviewItems className="wrapper"/>
          <ReviewItems className="wrapper"/>
          <ReviewItems className="wrapper"/>
          <ReviewItems className="wrapper"/>
          <ReviewItems className="wrapper"/>
          <ReviewItems className="wrapper"/>
        </>
      ) : (
        ""
      )}
    </ReviewListSection.ListFrame>
  );
};

export default MyPageActivityList;
