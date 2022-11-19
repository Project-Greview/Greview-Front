import icoSend from "../../../resources/img/icons/send_ico.svg";
import ReviewReCmtItems from "./ReviewReCmtItems";

const ReviewCmtItems = () => {
  return(
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

        <ReviewReCmtItems/>

        <ReviewReCmtItems/>

      </div>
    </div>
  )
}

export default ReviewCmtItems;