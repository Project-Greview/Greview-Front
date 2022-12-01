import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import "./resources/style/css/common.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </RecoilRoot>
);
reportWebVitals();
