import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mainpage from './pages/Mainpage';
import Partspage from './pages/Partspage';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route path={"/"} element={<App />} />
    <Route path={"/mainpage"} element={<Mainpage />} />
    <Route path={"/partspage"} element={<Partspage />} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
