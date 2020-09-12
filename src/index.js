import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from "react-router-dom";
import Home from './screens/home';
import SearchPage from './screens/searchPage';

const headerroutes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/search" component={SearchPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(headerroutes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
