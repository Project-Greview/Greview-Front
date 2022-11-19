import { Routes, Route } from "react-router-dom";
import MyPageMain from "../pages/mypage/MyPageMain";
import HistoryBackHeader from "../components/include/view/HistoryBackHeader";
import MyPageSetting from "../pages/mypage/MyPageSetting";
import { MyPageSection } from "../components/mypage/style/mypageStyle";
import MyPageModify from "../pages/mypage/MyProfileModify";

const MyPageRouter = () => {
  return(
    <MyPageSection.MyPageFrame>
      <HistoryBackHeader/>
      <Routes>
        <Route path="/main" element={<MyPageMain/>}/>
        <Route path="/setting" element={<MyPageSetting/>}/>
        <Route path="/modify"element={<MyPageModify/>}/>
      </Routes>
    </MyPageSection.MyPageFrame>
  )
}

export default MyPageRouter;