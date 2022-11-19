import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/setup/view/WelcomePage";

import Login from "./pages/login/Login";
import Registration from "./pages/regist/Registration";
import PageRouter from "./layout/PageRouter";

const App = () => {
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
