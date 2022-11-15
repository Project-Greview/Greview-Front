import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/setup/view/WelcomePage";

import Login from "./components/login/view/Login";
import Registration from "./components/register/view/Registration";
import PageFrame from "./components/PageFrame";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/regist" element={<Registration/>}/>
        <Route path="/main/*" element={<PageFrame/>}/>
        <Route path="/review/*" element={<PageFrame/>}/> 
      </Routes>
  );
}

export default App;
