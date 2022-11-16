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
            <button type="button" className="select">장소 검색</button>
            <button type="button" className="select active">직접 입력</button>
            <div className="mg flex flex_jc_sb flex_dir_c flex_flow_w">
              <input className="search" type="text" name="place" placeholder="장소명을 입력하세요" style={{ width: "74%" }}/>
              <Common.Button style={{ width: "24%",height:"3.3rem" }} disabled>확인</Common.Button>
            </div>
          </div>
          <div className="line"></div>

          {/* <div className="star_wrap">
            <button className="star" type="button"><img src={images.star_on} alt="" /></button>
            <button className="star" type="button"><img src={images.star_on} alt="" /></button>
            <button className="star" type="button"><img src={images.star_off} alt="" /></button>
            <button className="star" type="button"><img src={images.star_off} alt="" /></button>
            <button className="star" type="button"><img src={images.star_off} alt="" /></button>
            <p className="mt">별점을 선택해주세요.</p>
          </div> */}

          <div className="star_wrap">
            <p>별점을 선택해주세요.</p>
            <button className="star mt" type="button"><img src={images.star_on} alt="" /></button>
            <button className="star" type="button"><img src={images.star_on} alt="" /></button>
            <button className="star" type="button"><img src={images.star_off} alt="" /></button>
            <button className="star" type="button"><img src={images.star_off} alt="" /></button>
            <button className="star" type="button"><img src={images.star_off} alt="" /></button>
          </div>
          
          <div className="line"></div>
          <textarea className="review_txt" type="text" name="review" maxLength={100} placeholder="리뷰를 작성해주세요 (100자 이내)"/>
          <div className="flex flex_jc_sb flex_dir_c flex_flow_w">
            <input className="tag_input" type="text" name="review" style={{ width: "74%" }} placeholder="태그 작성(6자이내, 최대 3개)"/>
            <Common.Button style={{ width: "24%",height:"4.1rem" }}>추가</Common.Button>
          </div>
          
        </div>
      </ReviewDetailSection.writeForm>
      
    </ReviewDetailSection.ListFrame>
  )
}

export default ReviewDetail;