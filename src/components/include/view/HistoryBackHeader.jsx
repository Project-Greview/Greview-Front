import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { HistoryBackSection } from "../style/historybackheaderStyle";
import HistoryBack from "./HistorybackButton";

import { setPageTitleState } from "../../../states/commonState";

import images from "../../../resources/img/img";

const HistoryBackHeader = () => {
  const navigate = useNavigate();
  const pageInfo = useRecoilValue(setPageTitleState);
  return (
    <HistoryBackSection.HistoryBackFrame>
      <div className="history_back cursor_p">
        <HistoryBack />
      </div>
      <div
        className={`${
          pageInfo.value === 4 ? "has_btn" : ""
        } tit flex flex_jc_c`}
      >
        {pageInfo.tit}
      </div>
      {pageInfo.value === 4 ? (
        <div className="setting_btn flex_as_c" onClick={() => {navigate("/mypage/setting", {state:{value:8, tit:"설정"}})}}>
          <img src={images.gear} alt="설정" />
        </div>
      ) : (
        ""
      )}
    </HistoryBackSection.HistoryBackFrame>
  );
};

export default HistoryBackHeader;
