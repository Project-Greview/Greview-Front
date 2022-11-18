import { useRecoilValue } from "recoil";
import { HistoryBackSection } from "../style/historybackheaderStyle";
import HistoryBack from "../../../resources/style/common/Historyback";

import { setPageTitleState } from "../../../states/recoilCounterState";

import images from "../../../resources/img/img";

const HistoryBackHeader = () => {
  const pageInfo = useRecoilValue(setPageTitleState);
  return (
    <HistoryBackSection.HistoryBackFrame>
      <div className="history_back cursor_p">
        <HistoryBack />
      </div>
      <div className="tit flex flex_jc_c">{pageInfo.tit}</div>
      {pageInfo.value === 4 ? (
        <div className="flex_as_c">
          <img src={images.gear} alt="설정" />
        </div>
      ) : (
        ""
      )}
    </HistoryBackSection.HistoryBackFrame>
  );
};

export default HistoryBackHeader;
