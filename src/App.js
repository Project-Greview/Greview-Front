import { Routes, Route, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import WelcomePage from "./components/setup/view/WelcomePage";

import Login from "./components/login/view/Login";
import Registration from "./components/register/view/Registration";
import PageFrame from "./components/PageFrame";

import { setPageTitleState } from "./states/recoilCounterState";
import { useEffect } from "react";
const App = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useRecoilState(setPageTitleState);

  useEffect(() => {
    setPageTitle(location.state.tit);
  }, [location.state.tit]);
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/" element={<Login />} />
      <Route path="/regist" element={<Registration />} />
      <Route path="/*" element={<PageFrame />} />
      <Route path="/main/*" element={<PageFrame />} />
    </Routes>
  );
};

export default App;
