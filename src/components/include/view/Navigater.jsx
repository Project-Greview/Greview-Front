import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { setLeftMenuState } from "../../../states/commonState";
import { BottomMenuSection } from "../style/bottommenuStyle";

const Navigater = () => {
  const leftMenuState = useRecoilValue(setLeftMenuState);
  const navigate = useNavigate();
  const location = useLocation();
  return(
    <BottomMenuSection.BottomMenuFrame className={leftMenuState === true ? "disabled" : ""}>
      <ul className="flex flex_jc_sa flex_ai_c">
        <li
        className={location.state.value === 0 ? "active" : ""}
        onClick={
          () => {navigate(
            "/main/home", 
            {state: { 
              value: 0,
              tit: "지도",
              naviView: true
            }}
            )
          }
        }>
          <div className="img_box">
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.447 3.60474L13.447 0.604739C13.3081 0.535219 13.1549 0.499023 12.9995 0.499023C12.8441 0.499023 12.6909 0.535219 12.552 0.604739L7 3.38174L1.447 0.604739C1.2945 0.528537 1.12506 0.492584 0.954757 0.500297C0.784455 0.50801 0.618953 0.559132 0.473969 0.648808C0.328985 0.738483 0.209334 0.863735 0.126379 1.01267C0.0434244 1.1616 -7.93497e-05 1.32926 1.08651e-07 1.49974V14.4997C1.08651e-07 14.8787 0.214 15.2247 0.553 15.3947L6.553 18.3947C6.69193 18.4643 6.84515 18.5005 7.0005 18.5005C7.15585 18.5005 7.30907 18.4643 7.448 18.3947L13 15.6177L18.553 18.3937C18.7051 18.4707 18.8744 18.5071 19.0446 18.4996C19.2149 18.4921 19.3803 18.4408 19.525 18.3507C19.82 18.1677 20 17.8467 20 17.4997V4.49974C20 4.12074 19.786 3.77474 19.447 3.60474ZM8 5.11774L12 3.11774V13.8817L8 15.8817V5.11774ZM2 3.11774L6 5.11774V15.8817L2 13.8817V3.11774ZM18 15.8817L14 13.8817V3.11774L18 5.11774V15.8817Z" fill="#959292"/>
          </svg>
          </div>
          <div>지도</div>
        </li>
        <li
          className={location.state.value === 1 ? "active" : ""}
          onClick={
          () => {navigate(
            "/main/home", 
            {state: { 
              value: 1,
              tit: "동네탐색",
              naviView: false
            }}
            )
          }
        }>
          <div className="img_box">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9805 13.1992L6.34375 15.3672C5.55078 15.6602 4.83984 14.9141 5.13281 14.1562L7.30078 8.51953C7.42578 8.1875 7.6875 7.92578 8.01953 7.80078L13.6562 5.63281C14.4141 5.33984 15.1602 6.05078 14.8672 6.84375L12.6992 12.4805C12.5742 12.8125 12.3125 13.0742 11.9805 13.1992ZM9.96484 9.25C9.30859 9.25 8.71484 9.80859 8.71484 10.5C8.71484 11.1914 9.30859 11.75 9.96484 11.75C10.6914 11.75 11.25 11.1914 11.25 10.5C11.25 9.80859 10.6914 9.25 9.96484 9.25ZM20 10.5C20 16.0234 15.5234 20.5 10 20.5C4.47656 20.5 0 16.0234 0 10.5C0 4.97656 4.47656 0.5 10 0.5C15.5234 0.5 20 4.97656 20 10.5ZM10 2.375C5.51172 2.375 1.875 6.01172 1.875 10.5C1.875 14.9883 5.51172 18.625 10 18.625C14.4883 18.625 18.125 14.9883 18.125 10.5C18.125 6.01172 14.4883 2.375 10 2.375Z" fill="#959292"/>
            </svg>
          </div>
          <div>동네탐색</div>
        </li>
        <li
          className={location.state.value === 2 ? "active" : ""}
          onClick={
          () => {navigate(
            "/review/reviewrite", 
            {state: { 
              value: 2,
              tit: "리뷰쓰기",
              naviView: false
            }}
            )
          }
        }>
          <div className="img_box">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.3125 11.75H12.75V8.1875C12.75 8.08437 12.6656 8 12.5625 8H11.4375C11.3344 8 11.25 8.08437 11.25 8.1875V11.75H7.6875C7.58437 11.75 7.5 11.8344 7.5 11.9375V13.0625C7.5 13.1656 7.58437 13.25 7.6875 13.25H11.25V16.8125C11.25 16.9156 11.3344 17 11.4375 17H12.5625C12.6656 17 12.75 16.9156 12.75 16.8125V13.25H16.3125C16.4156 13.25 16.5 13.1656 16.5 13.0625V11.9375C16.5 11.8344 16.4156 11.75 16.3125 11.75Z" fill="#959292"/>
              <path d="M12 2C6.20156 2 1.5 6.70156 1.5 12.5C1.5 18.2984 6.20156 23 12 23C17.7984 23 22.5 18.2984 22.5 12.5C22.5 6.70156 17.7984 2 12 2ZM12 21.2188C7.18594 21.2188 3.28125 17.3141 3.28125 12.5C3.28125 7.68594 7.18594 3.78125 12 3.78125C16.8141 3.78125 20.7188 7.68594 20.7188 12.5C20.7188 17.3141 16.8141 21.2188 12 21.2188Z" fill="#959292"/>
            </svg>
          </div>
          <div>리뷰쓰기</div>
        </li>
        <li 
          className={location.state.value === 3 ? "active" : ""}
          onClick={
          () => {navigate(
            "/savelist", 
            {state: { 
              value: 3,
              tit: "저장목록",
              naviView: false
            }}
            )
          }
        }>
          <div className="img_box">
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0.5H2C0.9 0.5 0 1.4 0 2.5V18.5L7 15.5L14 18.5V2.5C14 1.4 13.1 0.5 12 0.5ZM12 15.5L7 13.32L2 15.5V2.5H12V15.5Z" fill="#959292"/>
            </svg>
          </div>
          <div>저장목록</div>
        </li>
        <li 
          className={location.state.value === 4 ? "active" : ""}
          onClick={
          () => {navigate(
            "/mypage/main", 
            {state: { 
              value: 4,
              tit: "마이페이지",
              naviView: true
            }}
            )
          }
        }>
          <div className="img_box">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 2.5C9.6 2.5 10.5 3.4 10.5 4.5C10.5 5.6 9.6 6.5 8.5 6.5C7.4 6.5 6.5 5.6 6.5 4.5C6.5 3.4 7.4 2.5 8.5 2.5ZM8.5 11.5C11.2 11.5 14.3 12.79 14.5 13.5V14.5H2.5V13.51C2.7 12.79 5.8 11.5 8.5 11.5ZM8.5 0.5C6.29 0.5 4.5 2.29 4.5 4.5C4.5 6.71 6.29 8.5 8.5 8.5C10.71 8.5 12.5 6.71 12.5 4.5C12.5 2.29 10.71 0.5 8.5 0.5ZM8.5 9.5C5.83 9.5 0.5 10.84 0.5 13.5V16.5H16.5V13.5C16.5 10.84 11.17 9.5 8.5 9.5Z" fill="#959292"/>
            </svg>
          </div>
          <div>마이페이지</div>
        </li>
      </ul>
    </BottomMenuSection.BottomMenuFrame>
  )
}

export default Navigater;