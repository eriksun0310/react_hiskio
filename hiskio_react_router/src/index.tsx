import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App copy';
import reportWebVitals from './reportWebVitals';
// 搭配後端做使用
import { BrowserRouter } from 'react-router-dom';
// # :不會傳到後端
import { HashRouter} from 'react-router-dom';
// import '@vteam_components/cloud/dist/style'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
