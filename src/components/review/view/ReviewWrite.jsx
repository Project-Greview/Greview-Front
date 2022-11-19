import testImages from "../../../resources/img/review.jpg";

import { useState, useEffect } from "react";
import images from "../../../resources/img/img";
import { ReviewDetailSection } from "../style/reviewStyle";
import { Common } from "../../../resources/style/common/commonStyle";
import HistoryBack from "../../include/view/HistorybackButton";

const ReviewWrite = () => {

  const [text, setText] = useState('');

  function slideUp(el) {
    el.style.animation = "slideDown 0.5s ease normal"
  }
  function slideDown() {
    const el = document.querySelector('.pop_wrap');
    el.style.animation = "slideDown 0.5s ease reverse";
    el.classList.toggle('hide');
  }

  const onPopup = (e) => {
    var state = e.target.classList;

    if(!state.contains('disabled')){
      const popup = document.querySelector('.pop_wrap');
      popup.classList.toggle('hide');
      slideUp(popup);
    }else{
      console.log('disabled');
    }
    
  };

  const btnActive = (e) => {
    const btn = document.querySelectorAll('.place_sel .select');
    btn.forEach(function(e){
      e.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  const onChange = (e) => {
    const selBtn = document.querySelector('#selBtn');
    setText(e.target.value);
    
    if(e.target.value == ''){
      selBtn.classList.add('disabled');
    }else{
      selBtn.classList.remove('disabled');
    }
  };
  
  return(
    <ReviewDetailSection.ListFrame>
      <ReviewDetailSection.WriteForm>
        <div className="write_wrap">
          <div className="place_sel">
            <p>장소명 선택</p>
            <button type="button" className="select place" onClick={btnActive}>장소 검색</button>
            <button type="button" className="select custom" onClick={btnActive}>직접 입력</button>
            <div className="mg flex flex_jc_sb flex_dir_c flex_flow_w">
              <div className="search_box">
                <label htmlFor="">
                  <img src={images.search_btn} alt=""/>
                </label>
                <input className="search" type="text" name="place" placeholder="장소명을 입력하세요" 
                  onChange={onChange} value={text}
                  style={{ width: "100%" }}
                />
              </div>
              <Common.Button style={{ width: "24%",height:"3.3rem" }} type="button" className="disabled" id="selBtn"
                onClick={onPopup}>확인</Common.Button>
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
      </ReviewDetailSection.WriteForm>
      <Common.PopSlideFull>
        <div className="pop_wrap hide" onClick={slideDown}>
          <div className="pop_cnt">
            <div className="line"></div>

            <ReviewDetailSection.PlaceSearch>
              <div className="search_header">
                <HistoryBack />
                <div className="tit flex flex_jc_c">장소검색</div>
              </div>
              <div className="search_box">
                <label htmlFor="">
                  <img src={images.search_btn} alt=""/>
                </label>
                <input type="text" placeholder={ "지번, 도로명, 건물명으로 검색"} style={{ width: "100%" }} 
                  value={"제일곱창"}
                />
                <button className="btn_close" type="button"><img src={images.btn_close} alt=""/></button>
              </div>
              <ul className="search_list">
                <li className="active">
                  <p className="name">제일곱창</p>
                  <p className="address">서울특별시 성동구 고산자로 281</p>
                </li>
                <li>
                  <p className="name">제일곱창</p>
                  <p className="address">서울특별시 성동구 고산자로 281</p>
                </li>
              </ul>
            </ReviewDetailSection.PlaceSearch>

          </div>
        </div>
      </Common.PopSlideFull>
    </ReviewDetailSection.ListFrame>
  )
}

export default ReviewWrite;