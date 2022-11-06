import { Routes, Route } from "react-router-dom";
import Login from "./components/login/view/Login";
import { Common } from "./resources/style/styled-components/commonStyle";

const App = () => {
  return (
    <Common.Frame>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Common.Frame>
  );
}

export default App;
