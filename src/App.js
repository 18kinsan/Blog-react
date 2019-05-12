import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Portofolio from './components/Portofolio.js';
import Contact from './components/Contact.js';

class App extends Component {
  render(){
    return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Navbar}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/Portofolio" component={Portofolio}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
    );
  }
}
export default App;
