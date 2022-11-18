import { useRecoilValue } from "recoil";
import { HistoryBackSection } from "../style/historybackheaderStyle";
import HistoryBack from "../../../resources/style/common/Historyback";

import { setPageTitleState } from "../../../states/recoilCounterState";

const HistoryBackHeader = () => {
  const pageTitle = useRecoilValue(setPageTitleState);
  return (
    <HistoryBackSection.HistoryBackFrame>
      <div className="history_back cursor_p">
        <HistoryBack />
      </div>
      <div class="tit flex flex_jc_c">{pageTitle}</div>
    </HistoryBackSection.HistoryBackFrame>
  );
};

export default HistoryBackHeader;
