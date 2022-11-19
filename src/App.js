import { Routes, Route, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import WelcomePage from "./components/setup/view/WelcomePage";

import Login from "./pages/login/Login";
import Registration from "./pages/regist/Registration";
import PageRouter from "./layout/PageRouter";


import { setPageTitleState } from "./states/recoilCounterState";
import { useEffect } from "react";
const App = () => {
  // const location = useLocation();
  // const setPageTitle = useSetRecoilState(setPageTitleState);
  // useEffect(() => {
  //   setPageTitle(location.state);
  // }, [location.state.tit]);
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/" element={<Login />} />
      <Route path="/regist" element={<Registration />} />
      <Route path="/*" element={<PageRouter />} />
      <Route path="/main/*" element={<PageRouter />} />
    </Routes>
  );
};

export default App;
