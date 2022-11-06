import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/setup/view/WelcomePage";

import Login from "./components/login/view/Login";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
  );
}

export default App;
