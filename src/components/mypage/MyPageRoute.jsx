import { Routes, Route } from "react-router-dom";
import MyPageMain from "./view/MyPageMain";

const MyPageRoute = () => {
  return(
    <Routes>
      <Route path="/mypage/main" element={<MyPageMain/>}/>
    </Routes>
  )
}

export default MyPageRoute;