import React from 'react';
// import { connect } from "react-redux";
import './scss/main.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from './router/router'


export default class App extends React.Component {

  render() {
    return (

      <Router>
        {this.showRoutes(routes)}
      </Router>
    )
  }
  showRoutes = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, i) => {
        return <Route path={route.path} exact={route.exact} component={route.main} key={i} />
      })
    }
    return <Switch>{result}</Switch>
  }
}