import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/setup/view/WelcomePage";

import Login from "./components/login/view/Login";
import Registration from "./components/register/view/Registration";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/regist" element={<Registration/>}/>
      </Routes>
  );
}

export default App;
