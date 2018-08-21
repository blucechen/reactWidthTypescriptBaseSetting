import { hot } from 'react-hot-loader';
import * as React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import Container from './pages/layout/Container';
import { history } from './http/http'
import * as Loadable from 'react-loadable';
import {Icon} from 'antd'

import './App.css'

const lazyHeader = Loadable({
  loader: () => import('./redux/Header'),
  loading() {
    return <div>Loading...</div>
  }
})

const lazyContent = Loadable({
  loader: () => import('./redux/Content'),
  loading() {
    return <div>Loading...</div>
  }
})

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Icon type="lock"></Icon>
        
        <Router history={history}>
          <Container>
            <Switch>
              <Route exact={true} path="/" component={lazyHeader} />
              <Route path="/header" component={lazyHeader} />
              <Route path="/content" component={lazyContent} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App)