import React, {useState} from 'react';
import logo from './logo.svg';
import {Button, Input, Icon} from 'antd';
// import 'antd/es/button/style';

import {hot} from 'react-hot-loader/root';
import './App.css';
import ComA from './comA';
const App: React.FC = () => {
  let [count, setCount] = useState(12)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ComA></ComA>
        <Icon type="import" />
        <Icon type="copyright" />
        <h1>{count}</h1>
        <button className="ant-message" >add</button>
        <Button type="primary" onClick={() => setCount(count+1)}>Button</Button>
        <Button type="primary">Primary</Button>
        <Input></Input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default hot(App);
