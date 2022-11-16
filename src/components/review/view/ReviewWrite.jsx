import testImages from "../../../resources/img/review.jpg";

import images from "../../../resources/img/img";
import { ReviewDetailSection } from "../style/reviewStyle";
import HistoryBack from "../../../resources/style/common/Historyback";
import { Common } from "../../../resources/style/common/commonStyle";

const ReviewDetail = () => {

  return(
    <ReviewDetailSection.ListFrame>
      <div className="review_header flex flex_ai_c">
        <HistoryBack/>
        <div className="tit flex flex_jc_c">리뷰쓰기</div>
      </div>
      
      <ReviewDetailSection.writeForm>
        <div className="write_wrap">
          <div className="place_sel">
            <p>장소명 선택</p>
            <button type="button">장소 검색</button>
            <button type="button" className="active">직접 입력</button>
            <input className="search" type="text" name="place" placeholder="장소명을 입력하세요"/>
            <button type="button"></button>
          </div>
          <div className="star_wrap">
            <button className="star" type="button">1</button>
            <button className="star" type="button">2</button>
            <button className="star" type="button">3</button>
            <button className="star" type="button">4</button>
            <button className="star" type="button">5</button>
          </div>
          <p className="info">별점을 선택해주세요.</p>
            <input className="review_input" type="text" name="review" placeholder="리뷰를 작성해주세요 (100자 이내)"/>
            <input className="tag_input" type="text" name="review"/>
        </div>
      </ReviewDetailSection.writeForm>
      
    </ReviewDetailSection.ListFrame>
  )
}

export default ReviewDetail;