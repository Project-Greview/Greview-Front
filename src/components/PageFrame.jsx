import { Routes, Route } from "react-router-dom";
import { Common } from "../resources/style/styled-components/commonStyle";
import Home from "./main/view/Home";

const PageFrame = () => {
  return(
    <Common.Frame>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Common.Frame>
  )
}

export default PageFrame;