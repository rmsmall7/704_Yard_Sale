import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Post from "./pages/Post";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/post/:id" component={Details} />
            <Route exact path="/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;

