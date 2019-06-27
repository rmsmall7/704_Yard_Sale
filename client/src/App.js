import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import SuperContainer from './components/SuperContainer';
import Header from './components/Header';
import SuperContainerInner from './compon/SuperContainerInner';
import HomeBanner from './components/HomeBanner';
import YardSaleHeader from './components/YardSaleHeader';
import Row from './components/Row';
import YardSalePost from './components/YardSalePost';
import Footer from './components/Footer';
import HomeNew from './pages/HomeNew';
import YardPost from './pages/YardPost';
import YardSave from './pages/YardSave';



class App extends Component {
  render() {
    return (
      <Router>
        {/* <React.Fragment>
          <Menu />
          <SuperContainer>
            <Header />
            <SuperContainerInner>
              <HomeBanner />
              <YardSaleHeader />
              <Row />
              <YardSalePost />
              <YardSalePost />
              <YardSalePost />
              <Footer />
            </SuperContainerInner>
          </SuperContainer>
        </React.Fragment> */}
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">704-Yard Sale</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/YardPost'} className="nav-link">Yard Post</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/YardSave'} className="nav-link">Yard Save</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <h2>Welcome to 704 Yard Sale</h2> <br />
          </div>
          <Switch>
            <Route exact path="/" component={HomeNew} />
            <Route exact path="/YardPost" component={ YardPost } />
            <Route exact path="/YardSave" component={ YardSave } />
          </Switch>
      </Router>
        );
    
      }
    }
    
    export default App;

    // <div className="container">
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item">
    //         <Link to={'/'} className="nav-link">Home</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to={'/YardPost'} className="nav-link">Yard Post</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to={'/YardSave'} className="nav-link">Yard Save</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav> <br />
    // <h2>Welcome to React CRUD Tutorial</h2> <br />
    // </div>
    // <Switch>
    //   <Route exact path="/" component={HomeNew} />
    //   <Route exact path="/YardPost" component={ YardPost } />
    //   <Route exact path="/YardSave" component={ YardSave } />
    // </Switch>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // import Home from "./pages/Home";
    // import Details from "./pages/Details";
    // import Post from "./pages/Post";
    // import Saved from "./pages/Saved";
    // import Search from "./pages/Search";
    // import NoMatch from "./pages/NoMatch";
    // import Nav from "./components/Nav";
    
    
    // ---OLD CODE---//
// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/post" component={Post} />
//           <Route exact path="/post/:id" component={Details} />
//           <Route exact path="/search" component={Search} />
//           {/* <Route exact path="/saved" component={Saved} /> */}
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

