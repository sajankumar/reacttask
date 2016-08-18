import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Main from './main.jsx';
import Home from './home.jsx';
import Hello from './hello.jsx';
import Secret from './secret.jsx';



ReactDOM.render((
     <Router history = {browserHistory}>
      <Route path = "/" component = {Main}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "hello" component = {Hello} />
         <Route path = "secret" component = {Secret} />
         
      </Route>
   </Router>


), document.getElementById('wrapper'));