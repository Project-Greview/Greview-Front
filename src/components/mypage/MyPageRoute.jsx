import { Routes, Route } from "react-router-dom";
import MyPageMain from "./view/MyPageMain";
import HistoryBackHeader from "../include/view/HistoryBackHeader";
import MyPageSetting from "./view/MyPageSetting";
import { MyPageSerction } from "./style/mypageStyle";
import MyPageModify from "./view/MyProfileModify";

const MyPageRoute = () => {
  return(
    <MyPageSerction.MyPageFrame>
      <HistoryBackHeader/>
      <Routes>
        <Route path="/main" element={<MyPageMain/>}/>
        <Route path="/setting" element={<MyPageSetting/>}/>
        <Route path="/modify"element={<MyPageModify/>}/>
      </Routes>
    </MyPageSerction.MyPageFrame>
  )
}

export default MyPageRoute;