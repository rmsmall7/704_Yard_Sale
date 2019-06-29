import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import HomeNew from './pages/HomeNew';
import YardPost from './pages/YardPost';
import YardSave from './pages/YardSave';
import queryString from "query-string";




class App extends Component {
  state = {
    isLoggedIn: true
  }

  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
   }
}
  
  render() {
    return (
      <Router>
      <div>
          <Menu />
          <Header />
          <Switch>
            <Route exact path="/" component={HomeNew} />
            <Route exact path="/YardPost" component={YardPost} />
            <Route exact path="/YardSave" component={YardSave} />
            <Route exact path="/YardSaleList" component={YardSaleList} />
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;

