import { Common } from "../../../resources/style/common/commonStyle";

import { useState, useRef } from "react";
import { ResultListSection } from "../style/resultListStyle";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
// import "../../../resources/style/css/style.css";
import "../style/bottomSheet.css";


const ResultList = (props) => {
  const [open, setOpen] = useState(false);
  const bottomSheetRef = useRef();
  var scroll_top = 0;

  return (
    <ResultListSection.ListFrame>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet open={true} /*open={open}*/
        ref={bottomSheetRef}
        onScrollCapture={(e) => { scroll_top = e.target.scrollTop; }}
        onDismiss={() => { setOpen(false); props.stopBounce()}}
        blocking={false}
        expandOnContentDrag={false}
        scrollLocking={false}
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        snapPoints={({ minHeight, maxHeight }) => [
          minHeight + minHeight * 0.1,
          maxHeight - maxHeight / 10,
          maxHeight / 10,
          maxHeight * 0.4
        ]}
      >
        <div className="info">
          <p className="name">김기태 <span>3km</span></p>
          <p>이 주변의 리뷰 전체보기</p>
        </div>
        <ul className="list">
            <li>
              <div className="list on"></div>
              <div className="detail">
                <p className="name">은행나무 포토존</p>
                <p className="address">서울 성동구 마조로 17</p>
                <p className="distance">250m 
                  <span className="line">|</span> 
                  <span className="review">리뷰 </span>
                  <span className="num">1</span>
                </p>
              </div>
              <button className="save" type="button">저장</button>
            </li>
            <li>
              <div className="list"></div>
              <div className="detail">
                <p className="name">은행나무 포토존</p>
                <p className="address">서울 성동구 마조로 17</p>
                <p className="distance">250m 
                  <span className="line">|</span> 
                  <span className="review">리뷰 </span>
                  <span className="num">1</span>
                </p>
              </div>
              <button className="save on" type="button">저장</button>
            </li>
          </ul>
      </BottomSheet>
    </ResultListSection.ListFrame>
  );
};

export default ResultList;
