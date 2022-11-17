import testImages from "../../../resources/img/review.jpg";

import { useState } from "react";
import images from "../../../resources/img/img";
import { ReviewDetailSection } from "../style/reviewStyle";
import HistoryBack from "../../../resources/style/common/Historyback";
import { Common } from "../../../resources/style/common/commonStyle";

const ReviewDetail = () => {

  const popOpen = () => {
    console.log('ddd');
  }

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('kkkkkk');
  };

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
              <input className="search" type="text" name="place" placeholder="장소명을 입력하세요" 
              onChange={onChange} value={text}
                style={{ width: "74%" }}
              />
              <Common.Button style={{ width: "24%",height:"3.3rem" }} type="button" id="#selBtn"
                onClick={onReset}>확인</Common.Button>
            </div>
          </div>
          <div className="line"></div>

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

          <div className="tag_wrap">
            <div className="input_box">
              <label htmlFor="">
                <img src={images.marker_c} alt=""/>
              </label>
              <input type="text" placeholder={ "해시태그를 입력해주세요"} style={{ width: "100%" }} />
            </div>
            <Common.Button style={{ width: "24%",height:"4.1rem" }}>추가</Common.Button>
          </div>
          
          <div className="hashtag_wrap">
            <div className="overBox">
              <span className="hashtag">맛집맛집맛</span>
              <span className="hashtag">친절해요</span>
              <span className="hashtag">웨이팅필수</span>
            </div>
          </div>

          <div className="pic_wrap">
            <button className="pic_add" type="button">
              <img src={images.camera} alt="" />
              <p>사진 (0/2)</p>
            </button>
          </div>
          <Common.Button style={{ width: "100%"}}>등록하기</Common.Button>
        </div>
      </ReviewDetailSection.writeForm>
      <Common.PopSlideFull>
        <div className="pop_wrap dn">
          <div className="pop_cnt">
            <div className="line"></div>
          </div>
        </div>
      </Common.PopSlideFull>
    </ReviewDetailSection.ListFrame>
  )
}

export default ReviewDetail;