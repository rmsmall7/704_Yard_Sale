import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivatRoute from "./components/PrivateRoute";
import Menu from './components/Menu';
import Header from './components/Header';
import HomeNew from './pages/HomeNew';
import YardPost from './pages/YardPost';
import YardSave from "./pages/YardSave";
import YardSaleList from './pages/YardSaleList';
import Login from './pages/Login';
<<<<<<< HEAD

=======
import axios from 'axios'
>>>>>>> 12ad0208776470c0d7b8ac3d1fb2fe174facdf69


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
          <h1>"LoggedIn"</h1>
          <h1>"LoggedIn"</h1>
          <h1>"LoggedIn"</h1>
          <h1>"LoggedIn"</h1>
          <h1>"LoggedIn"</h1>
          </> : 
          <>
          <h1>"NOT"</h1>
          <h1>"NOT"</h1>
          <h1>"NOT"</h1>
          <h1>"NOT"</h1>
          </>}
          <Switch>
            <PrivatRoute exact isloggedIn={this.state.isLoggedIn} path="/" component={()=><HomeNew isloggedIn={this.state.isLoggedIn}/>} />
            <Route exact path="/YardPost" component={YardPost} />
            <Route exact path="/YardSave" component={YardSave} />
            <Route exact path="/YardSaleList" component={YardSaleList} />
<<<<<<< HEAD
            <Route exact path="/Login" component={Login} />
=======
            <Route exact path="/Login" component={()=><Login handleUserAccess={this.handleUserAccess} isloggedIn={this.state.isLoggedIn}/>} />
>>>>>>> 12ad0208776470c0d7b8ac3d1fb2fe174facdf69
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
