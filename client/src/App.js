import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import Menu from './components/Menu';
import Header from './components/Header';
import HomeNew from './pages/HomeNew';
import YardPost from './pages/YardPost';
import YardSave from "./pages/YardSave";
import YardSaleList from './pages/YardSaleList';
import Login from './pages/Login';
import axios from 'axios'


class App extends Component {
  state = {
    isLoggedIn: true
  }

  componentWillMount(){
    axios.get("/auth").then(dbData => {
      console.log(dbData.data.user)
      if(dbData.data.user){
        this.setState({
          isLoggedIn: true
        })
      } else {
        this.setState({
          isLoggedIn: false
        })
      }
    })
  }

  handleUserAccess = (val) => {
    this.setState({
      isLoggedIn: val
    })
  }
  
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Header />
          { this.state.isLoggedIn ? <>
          <h3>"You are Logged In"</h3>
          <h3>"You are Logged In"</h3>
          <h3>"You are Logged In"</h3>
   
          </> : 
          <>
          <h3>"You are Logged Out"</h3>
          <h3>"You are Logged Out"</h3>
          <h3>"You are Logged Out"</h3>
          </>}
          <Switch>
            <Route exact path="/" component={HomeNew} />




            <PrivateRoute exact isloggedIn={this.state.isLoggedIn} path="/YardPost" component={()=><YardPost isloggedIn={this.state.isLoggedIn}/>} />
            <Route exact path="/YardSave" component={YardSave} />
            <Route exact path="/YardSaleList" component={YardSaleList} />
            <Route exact path="/Login" component={()=><Login handleUserAccess={this.handleUserAccess} isloggedIn={this.state.isLoggedIn}/>} />
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
