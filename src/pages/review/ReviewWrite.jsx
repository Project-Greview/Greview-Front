import testImages from "../../resources/img/review.jpg";
import axios from "axios";

import { useState, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { searchResult, searchKeyword } from "../../states/commonState";

import images from "../../resources/img/img";
import { ReviewDetailSection } from "../../components/review/style/reviewStyle";
import { Common } from "../../resources/style/common/commonStyle";
import HistoryBack from "../../components/include/view/HistorybackButton";
import icoClose from "../../resources/img/icons/close_ico_2.svg";
import HashTag from "../../components/review/view/HashTag";
import { useCallback } from "react";

const ReviewWrite = () => {
  const [result, setResult] = useState("");
  const [place, setPlace] = useState("");
  const getKeyword = useSetRecoilState(searchKeyword);

  const onChangePlaceKeyword = (e) => {
    e.preventDefault();
    setPlace(e.target.value);
  }

  const [text, setText] = useState('');
  const placeInput = useRef();
  const searchBox = useRef();
  const searchBtn = useRef();
  const rmBtn = useRef();
  const slPopup = useRef();
  const imgRef = useRef();
  // let [imageUrl, setImageUrl] = useState(null);
  let image = null;
  const [imgList, setImgList] = useState([]);
  const [counter, setCounter] = useState(0);
  const resultItem = useRecoilValue(searchResult);
  
  const ReImg = () =>{
    return (
      <div className="review_img" id={Date.now()}>
        <button className="btn_close" type="button" onClick={onRemove(Date.now())}>
          <img src={icoClose} alt="" />
        </button>
        <img src={image} alt=""/>
      </div>
    );
  }

  const onUploadImage = () => {

    const reader = new FileReader();
    const file = imgRef.current.files[0];
    // console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // setImageUrl(reader.result);
      image = reader.result;
      setImgList(imgList.concat(<ReImg key={imgList.length} />));
      setCounter(counter+1);
    };
    
  };

  const onUploadImageBtn = (e) => {
    console.log(counter);
    if(counter < 2) {
      imgRef.current.click();
    } else {
      alert('????????? ??? ?????? ????????? ??? ????????????');
    }
  }

  const onRemove = (e) => {
     console.log('rm');
  }


  //?????? ???????????? ??????
  function slideUp() {
    slPopup.current.style.animation = "slideDown 0.5s ease normal"
  }
  function slideDown() {
    slPopup.current.style.animation = "slideDown 0.5s ease reverse";
    slPopup.current.classList.toggle('hide');
  }

  //?????? ?????? ??????
  const onPopup = (e) => {
    var state = e.target.classList;

    if(!state.contains('disabled')){
      slPopup.current.classList.toggle('hide');
      slideUp();
    } else {
      searchBox.current.classList.add('disabled');
      placeInput.current.disabled = true;
      rmBtn.current.classList.remove('none');
      searchBtn.current.classList.add('none_im');
    }
  };

  const btnActive = (e) => {
    const btn = document.querySelectorAll('.place_sel .select');
    btn.forEach(function(e){
      e.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  const onInput = (e) => {
    setText(e.target.value);
    if(e.target.value === ''){
      searchBtn.current.classList.add('disabled');
    } else {
      searchBtn.current.classList.remove('disabled');
    }
  };
  // ????????? ?????? ?????? ????????????
  const [userLat, setUserLat] = useState(Number);
  const [userLon, setUserLng] = useState(Number);
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // ??????
            lon = position.coords.longitude; // ??????
        setUserLat(lat);
        setUserLng(lon);
      });
    } else {
      let locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    }

  // ????????????
  const searchKeywordPush = () => {
    getKeyword(text);
  }
  // ??????
  const [ title, setTitle ] = useState("");
  const onChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  
  // ??????
  const [ content, setContent ] = useState("");
  const onChangeContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  // ??????
  const [score, setScore] = useState(1);
  const storeScoreToggle = (e) => {
    const sltScore = e.target.value;
    setScore(sltScore);
  } ;
  
  // ????????????
  const [hashTag, setHashTag] = useState([]);
  const [hashTagValue, setHashTagValue] = useState("");

  const onChangeHashTagValue = (e) => {
    e.preventDefault();
    setHashTagValue(e.target.value);
  };

  const addIndex = useRef(0);
  const addHashTag = useCallback(
    text => {
      if (addIndex.current < 3) {
        const hashTagName = {
          id: addIndex.current,
          hashTagString: hashTagValue
        };
        setHashTag(hashTag.concat(hashTagName));
        addIndex.current +=1;
        setHashTagValue("");
      } else {
        
      }
    },
    [hashTagValue]
  );
  const removeHashTag = useCallback(
    id => {
      setHashTag(hashTag.filter(text => text.id !== id));
    },
    [hashTagValue]
  );
  // ????????? POST
  const onRegistPost = () => {
    axios.post("review",
    {headers:
      {
        accept: "*/*",
        "Content-Type": "application/json",
      },
        postReviewRequest: {
        title: text,
        content: content,
        rating: score,
        hashtags: [
          hashTag.hashTagString
        ],
        locationId: userLat,userLon
      },
      member: {
        email: "string",
        password: "string",
        roles: [
          "string"
        ],
        enabled: true,
        username: "string",
        authorities: [
          {
            authority: "string"
          }
        ],
        accountNonLocked: true,
        credentialsNonExpired: true,
        accountNonExpired: true
      }
    }).then ((res) => {
      if (res.status === 200) {
      }
    }).catch((err) => {
      console.log(err);
    });
  };
  const handleSubmit = (e) => {
    setResult(place);
    setPlace("");
  };

  return(
    <ReviewDetailSection.ListFrame>
      <ReviewDetailSection.WriteForm>
        <div className="write_wrap">
          <div className="place_sel">
            <p>????????? ??????</p>
            <button type="button" className="select place" onClick={btnActive}>?????? ??????</button>
            <button type="button" className="select custom" onClick={btnActive}>?????? ??????</button>
            <div className="mg flex flex_jc_sb flex_dir_c flex_flow_w">
              <div className="search_box" ref={searchBox}  onSubmit={handleSubmit}>
                <label htmlFor="">
                  <img src={images.search_btn} alt=""/>
                </label>
                <input className="search" type="text" name="place" placeholder="???????????? ???????????????"
                  onChange={onInput} value={text} ref={placeInput}
                  style={{ width: "100%" }}
                />
              </div>
              <Common.Button style={{ width: "24%",height:"3.3rem" }} type="button" className="disabled" ref={searchBtn}
                onClick={(e) => {
                  onPopup(e) 
                  searchKeywordPush()
                }}>??????</Common.Button>
              <button className="none" ref={rmBtn} style={{ width: "10%" }} type="button"><img src={images.btn_remove} alt=""/></button>
            </div>
          </div>
          <div className="line"></div>

          <div className="star_wrap">
            <p>????????? ??????????????????.</p>
            <div className="flex stars">
              <div>
                <input onClick={storeScoreToggle} type="checkbox" name="store_score" id="score_1" className={score >= 1 ? "active" : ""} defaultChecked value={1}/>
                <label htmlFor="score_1"></label>
              </div>
              <div>
                <input onClick={storeScoreToggle} type="checkbox" name="store_score" id="score_2" className={score >= 2 ? "active" : ""} value={2}/>
                <label htmlFor="score_2"></label>
              </div>
              <div>
                <input onClick={storeScoreToggle} type="checkbox" name="store_score" id="score_3" className={score >= 3 ? "active" : ""} value={3}/>
                <label htmlFor="score_3"></label>
              </div>
              <div>
                <input onClick={storeScoreToggle} type="checkbox" name="store_score" id="score_4" className={score >= 4 ? "active" : ""} value={4}/>
                <label htmlFor="score_4"></label>
              </div>
              <div>
                <input onClick={storeScoreToggle} type="checkbox" name="store_score" id="score_5" className={score >= 5 ? "active" : ""} value={5}/>
                <label htmlFor="score_5"></label>
              </div>
            </div>
          </div>
          
          <div className="line"></div>
          <textarea className="review_txt" type="text" name="review" value={content} onChange={onChangeContent} maxLength={100} placeholder="????????? ?????????????????? (100??? ??????)"/>

          <div className="tag_wrap">
            <div className="input_box">
              <label htmlFor="">
                <img src={images.marker_c} alt=""/>
              </label>
              <input type="text" placeholder={"??????????????? ??????????????????"} value={hashTagValue} onChange={onChangeHashTagValue} style={{ width: "100%" }} />
            </div>
            <Common.ButtonDiv style={{ width: "24%", height:"4.1rem" }} onClick={addHashTag} className={addIndex.current >= 3 ? "disabled" : ""}>??????</Common.ButtonDiv>
          </div>
          
          <div className="hashtag_wrap">
            <div className="overBox">
              {hashTag.map((item, index) =>
                <HashTag key={index} remove={removeHashTag} tagName={item.hashTagString}/>
              )}
            </div>
          </div>

          <div className="pic_wrap">
            <input type="file" accept="image/*" ref={imgRef} onChange={onUploadImage} className="none"/>
            <button className="pic_add" type="button" onClick={onUploadImageBtn}>
              <img src={images.camera} alt="" />
              <p>?????? ({counter}/2)</p>
            </button>
            {imgList}

          </div>
          <Common.Button style={{ width: "100%"}} onClick={onRegistPost}>????????????</Common.Button>
        </div>
      </ReviewDetailSection.WriteForm>

      <Common.PopSlideFull>
        <div className="pop_wrap hide" onClick={slideDown} ref={slPopup}>
          <div className="pop_cnt">
            <div className="line"></div>

            <ReviewDetailSection.PlaceSearch>
              <div className="search_header">
                <HistoryBack />
                <div className="tit flex flex_jc_c">????????????</div>
              </div>
              <div className="search_box">
                <label htmlFor="">
                  <img src={images.search_btn} alt=""/>
                </label>
                <input type="text" placeholder={ "??????, ?????????, ??????????????? ??????"} style={{ width: "100%" }} 
                  onChange={onChangePlaceKeyword} value={place}
                />
                <button className="btn_close" type="button"><img src={images.btn_close} alt=""/></button>
              </div>
              <ul className="search_list">
                {resultItem !== "ERROR" ? 
                  resultItem.map((item, index) => 
                    <li className="active" key={index}>
                      <p className="name">{item.place_name}</p>
                      <p className="address">{item.road_address_name}</p>
                    </li>
                  )
                  :
                  null
                }
              </ul>
            </ReviewDetailSection.PlaceSearch>

          </div>
        </div>
      </Common.PopSlideFull>
    </ReviewDetailSection.ListFrame>
  )
}

export default ReviewWrite;