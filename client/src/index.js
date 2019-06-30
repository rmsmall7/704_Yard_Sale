import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';


=======
import {BrowserRouter}from 'react-router-dom';
// import 'spectre.css/dist/spectre.min.css';
// import 'spectre.css/dist/spectre-icons.css';
//import './index.css';
>>>>>>> 12ad0208776470c0d7b8ac3d1fb2fe174facdf69


ReactDOM.render(
  <BrowserRouter>
  <Switch>
			<Route path="/" component={App} />
		</Switch>
  </BrowserRouter>,  document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();