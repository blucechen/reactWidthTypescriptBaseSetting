import {hot} from 'react-hot-loader';
import ComA from './comA'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> chinfdsafdsaa</h2>
        </div>
          <ComA />
        <p className="App-intro">
          To gffdsaffdsafdsadsafdsaft <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// export default App;
export default hot(module)(App);
