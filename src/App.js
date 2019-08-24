import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from "./components/login.js"
import Feed from './components/feed.js'
import Event from './components/event.js'
import Cadastro from "./components/cadastro.js"

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/feed" component={Feed}/>
        <Route path="/event/:id" component={Event}/>
        <Route path="/cadastro" component={Cadastro}/>
      </Switch>
    </Router>
  );
}

export default App;
