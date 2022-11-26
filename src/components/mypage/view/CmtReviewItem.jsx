import { useNavigate, useLocation } from "react-router-dom";

import images from "../../../resources/img/img";

import testImages from "../../../resources/img/review.jpg";
import HashTag from "../../review/view/HashTag";
import { CmtReviewSection } from "../style/cmtreviewStyle";

const CmtReviewItem = () => {
  const navigate = useNavigate();
  const onPushDetail = () => {
    navigate("/review/reviewdetail", {state: {value: 6, tit: "리뷰상세"}})
  };
  return(
    <CmtReviewSection.CmtReviewFrame>
      <div className="cmt_box flex" onClick={onPushDetail}>
        <div className="profile picture">
          <div className="picture">
            <img src={testImages} alt="" />
          </div>
        </div>
        <div className="contents flex flex_dir_c">
          <div className="name">User_ID</div>
          <div className="cmt_preview">댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트댓글영역 테스트</div>
          <div className="cmt_info flex">
            <div className="reg_dt"><span>1</span>일전</div>
            <div className="recmt_btn">답글달기</div>
            <div className="like_btn"></div>
          </div>
        </div>
        <div className="more"></div>
      </div>
    </CmtReviewSection.CmtReviewFrame>
  )
}

export default CmtReviewItem;