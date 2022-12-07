import { Routes, Route, Navigate } from "react-router-dom";
import  { useRecoilState } from 'recoil';

import { isLoginState } from "./states/loginState";

import Splash from "./pages/splash/Splash";

import Login from "./pages/login/Login";
import Registration from "./pages/regist/Registration";
import PageRouter from "./layout/PageRouter";

const App = () => {
  const UserToken = sessionStorage.getItem("session_token");
  
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regist" element={<Registration />} />
      {/* <Route path="/*" element={UserToken === null ? <Navigate to="/login"/> : <PageRouter />} /> */}
      <Route path="/*" element={<PageRouter />} />
      <Route path="/main/*" element={<PageRouter />} />
    </Routes>
  );
};

export default App;
