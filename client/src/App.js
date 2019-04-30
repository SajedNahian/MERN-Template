import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" store={store}>
            <Switch>{/* <Route path="/" component={} /> */}</Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
