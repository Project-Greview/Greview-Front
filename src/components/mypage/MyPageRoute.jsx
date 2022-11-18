import { Routes, Route } from "react-router-dom";
import MyPageMain from "./view/MyPageMain";
import HistoryBackHeader from "../include/view/HistoryBackHeader";

const MyPageRoute = () => {
  return(
    <>
      <HistoryBackHeader/>
      <Routes>
        <Route path="/main" element={<MyPageMain/>}/>
      </Routes>
    </>
  )
}

export default MyPageRoute;