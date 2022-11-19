import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { setPageTitleState } from "../states/recoilCounterState";
import { MyPageSection } from "../components/mypage/style/mypageStyle";

import MyPageMain from "../pages/mypage/MyPageMain";
import HistoryBackHeader from "../components/include/view/HistoryBackHeader";
import MyPageSetting from "../pages/mypage/MyPageSetting";
import MyPageModify from "../pages/mypage/MyProfileModify";
import PrivateInfoModify from "../pages/mypage/PrivateInfoModify";

const MyPageRouter = () => {
  const pageInfo = useRecoilValue(setPageTitleState);
  const pageValue = pageInfo.value;
  return(
    <MyPageSection.MyPageFrame style={pageValue === 8 ? {background: "#f6f6f6"} : {}}>
      <HistoryBackHeader/>
      <Routes>
        <Route path="/main" element={<MyPageMain/>}/>
        <Route path="/setting/*" element={<MyPageSetting/>}/>
        <Route path="/modify" element={<MyPageModify/>}/>
        <Route path="/privatemodify" element={<PrivateInfoModify/>}/>
      </Routes>
    </MyPageSection.MyPageFrame>
  )
}

export default MyPageRouter;