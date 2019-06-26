import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components-new/Menu';
import SuperContainer from './components-new/SuperContainer';
import Header from './components-new/Header';
import SuperContainerInner from './components-new/SuperContainerInner';
import HomeBanner from './components-new/HomeBanner';
import YardSaleHeader from './components-new/YardSaleHeader';
import Row from './components-new/Row';
import YardSalePost from './components-new/YardSalePost';
import Footer from './components-new/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <SuperContainer>
          <Header />
          <SuperContainerInner>
            <HomeBanner></HomeBanner>
            <YardSaleHeader></YardSaleHeader>
            <Row></Row>
            <YardSalePost></YardSalePost>
            <Footer></Footer>
          </SuperContainerInner>

        </SuperContainer>

      </React.Fragment>
    );

  }
}

export default App;



































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

