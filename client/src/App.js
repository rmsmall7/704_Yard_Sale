<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import HomeNew from './pages/HomeNew';
import YardPost from './pages/YardPost';
import YardSave from "./pages/YardSave";
import YardSaleList from './pages/YardSaleList';



class App extends Component {
  state = {
    isLoggedIn: true
  }
  
>>>>>>> 8cd4e4e5100df2cf68d232d5fbe18f5b1fcd9d4f
  render() {
    return (
      <Router>
        <div>
<<<<<<< HEAD
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/post/:id" component={Details} />
            <Route exact path="/search" component={Search} />
            <Route component={NoMatch} />
=======
          <Menu />
          <Header />
          <Switch>
            <Route exact path="/" component={HomeNew} />
            <Route exact path="/YardPost" component={YardPost} />
            <Route exact path="/YardSave" component={YardSave} />
            <Route exact path="/YardSaleList" component={YardSaleList} />
>>>>>>> 8cd4e4e5100df2cf68d232d5fbe18f5b1fcd9d4f
          </Switch>
        </div>
      </Router>
    );
<<<<<<< HEAD
  };
};
=======

  }
}
>>>>>>> 8cd4e4e5100df2cf68d232d5fbe18f5b1fcd9d4f

export default App;

