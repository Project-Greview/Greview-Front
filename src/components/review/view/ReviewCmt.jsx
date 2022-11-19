import images from "../../../resources/img/img";
import { ReviewCmtSection } from "../style/reviewCmtStyle";
import { Common } from "../../../resources/style/common/commonStyle";
import icoSend from "../../../resources/img/icons/send_ico.svg";

const ReviewCmt = () => {

  return(
    <ReviewCmtSection.ListFrame>
      <div className="review_wrap">

      <div className="cmt_wrap">
        <div className="cmt_box flex">
          <div className="picture">
            <img src={icoSend} alt="" />
          </div>
          <div className="userInfo">
            <p className="name">춤추는제이지</p>
            <p className="txt">여기는 진짜 근본이죠.. 배고파요 ㅜㅜ 여기는 진짜 근본이죠.. 배고파요 ㅜㅜ </p>
            <div className="cmt_info flex">
             <div className="date">1일전</div>
             <button className="reply">답글달기</button>
             <button className="thumb" type="button"></button>
            </div>
          </div>
        </div>

        <div className="reply_wrap">
          <div className="cmt_box flex">
            <div className="picture">
              <img src=" " alt="" />
            </div>
            <div className="userInfo">
              <p className="name">춤추는제이지</p>
              <p className="txt">여기는 진짜 근본이죠.. 배고파요 ㅜㅜ 여기는 진짜 근본이죠.. 배고파요 ㅜㅜ </p>
              <div className="cmt_info flex">
              <div className="date">1일전</div>
              <button className="reply">답글달기</button>
              <button className="thumb" type="button"></button>
              </div>
            </div>
          </div>
          <div className="cmt_box flex">
            <div className="picture">
              <img src={icoSend} alt="" />
            </div>
            <div className="userInfo">
              <p className="name">춤추는제이지</p>
              <p className="txt">여기는 진짜 근본이죠.. 배고파요 ㅜㅜ 여기는 진짜 근본이죠.. 배고파요 ㅜㅜ </p>
              <div className="cmt_info flex">
              <div className="date">1일전</div>
              <button className="reply">답글달기</button>
              <button className="thumb" type="button"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        

        {/* 댓글 없을때 */}
       {/* <div className="noCmt">
        아직 댓글이 없습니다.
       </div> */}
      </div>
      <div className="cmt_input flex flex_jc_sb flex_flow_w">
          <input type="text" style={{ width: "80%" }} placeholder="댓글을 입력하세요"/>
          <button type="button" style={{ width: "20%" }}><img src={icoSend}></img></button>
      </div>
    </ReviewCmtSection.ListFrame>
  )
}

export default ReviewCmt;