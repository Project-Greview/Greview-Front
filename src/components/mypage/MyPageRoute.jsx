import { Routes, Route } from "react-router-dom";
import MyPageMain from "./view/MyPageMain";
import HistoryBackHeader from "../include/view/HistoryBackHeader";
import MyPageSetting from "./view/MyPageSetting";
import { MyPageSerction } from "./style/mypageStyle";

const MyPageRoute = () => {
  return(
    <MyPageSerction.MyPageFrame>
      <HistoryBackHeader/>
      <Routes>
        <Route path="/main" element={<MyPageMain/>}/>
        <Route path="/setting" element={<MyPageSetting/>}/>
      </Routes>
    </MyPageSerction.MyPageFrame>
  )
}

export default MyPageRoute;