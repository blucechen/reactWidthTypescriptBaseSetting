// import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
// import axios from "axios";
// import 'antd/dist/antd.css';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
