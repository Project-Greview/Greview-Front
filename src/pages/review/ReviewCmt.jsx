import images from "../../resources/img/img";
import { ReviewCmtSection } from "../../components/review/style/reviewCmtStyle";
import { Common } from "../../resources/style/common/commonStyle";
import icoSend from "../../resources/img/icons/send_ico.svg";

import ReviewCmtItems from "../../components/review/view/ReviewCmtItems";

const ReviewCmt = () => {

  return(
    <ReviewCmtSection.ListFrame>
        <ReviewCmtItems/>
        
        {/* 댓글 없을때 */}
       {/* <div className="noCmt">
        아직 댓글이 없습니다.
       </div> */}
      <div className="cmt_input flex flex_jc_sb flex_flow_w">
          <input type="text" style={{ width: "80%" }} placeholder="댓글을 입력하세요"/>
          <button type="button" style={{ width: "20%" }}><img src={icoSend}></img></button>
      </div>
    </ReviewCmtSection.ListFrame>
  )
}

export default ReviewCmt;