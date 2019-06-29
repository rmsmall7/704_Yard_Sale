import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components-new/Menu';
import Header from './components-new/Header';
import HomeNew from './pages/HomeNew';
import YardPost from './pages/YardPost';
import YardSave from './pages/YardSave';



class App extends Component {
  state = {
    isLoggedIn: true
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
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;

