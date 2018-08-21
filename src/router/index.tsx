
import * as React from 'react'
// import * as Loadable from 'react-loadable'
import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom';
import lazyLoad from '@utils/js/t'

const Home = lazyLoad(()=> import('@pages/home'))
const About = lazyLoad(()=> import('@pages/about'))
const Topic = lazyLoad(()=> import('@pages/topic'))



class AppRouter extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/topic">topic</Link>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>
            {/* <Route path="/com" component={'fds'}></Route> */}
          </Switch>
        </div>
      </Router>
    )
  }
}


export default AppRouter







