import { hot } from 'react-hot-loader'
import AppRouter from './router/index'
import * as React from 'react'
import './App.css';




class App extends React.Component {
  public render() {
    return (
      <AppRouter />
    )
  }
}

export default hot(module)(App);
