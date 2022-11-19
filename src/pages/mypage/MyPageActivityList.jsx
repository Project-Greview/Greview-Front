import { useRecoilState } from "recoil";
import ReviewItems from "../../components/review/view/ReviewItems";

import { setMyPageTabState } from "../../states/tabMenuState";

import { ReviewListSection } from "../../components/review/style/reviewStyle";

const MyPageActivityList = () => {
  const tabIndex = useRecoilState(setMyPageTabState);
  console.log(tabIndex[0])
  return(
    <ReviewListSection.ListFrame style={{margin: "0rem -2rem", padding: "0 2rem"}}>
      <p className="tabmenu_tit flex">
        {tabIndex[0] === "1" ? (
          <>
            <div>내가 작성한 리뷰<span>(00)</span></div>
          </>
        ) 
        :
        (tabIndex[0] === "2" ? 
          (
            <>
              <div>내가 작성한 댓글<span>(00)</span></div>
            </>
          )
        : 
          (
            <>
              <div>리뷰</div>
              <div>댓글</div>
            </>
          )
          )
        }
      </p>
      {tabIndex[0] === "1" ? (<ReviewItems/>) : 
        (tabIndex[0] === "2" ? (<><ReviewItems/><ReviewItems/></>) : "")
      }
    </ReviewListSection.ListFrame>
  )
}

export default MyPageActivityList;