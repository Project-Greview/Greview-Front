import { Routes, Route } from "react-router-dom";

import Splash from "./pages/splash/Splash";

import Login from "./pages/login/Login";
import Registration from "./pages/regist/Registration";
import PageRouter from "./layout/PageRouter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/" element={<Login />} />
      <Route path="/regist" element={<Registration />} />
      <Route path="/*" element={<PageRouter />} />
      <Route path="/main/*" element={<PageRouter />} />
    </Routes>
  );
};

export default App;
