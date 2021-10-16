import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home.js';
import PermaCulture from './Components/PermaCulture.js'
import Nav from './Components/Nav'
import About from './Components/About'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={PermaCulture} path="/permaculture" />
        <Route component={About} path="/about" />
      </Switch>
    </BrowserRouter>



  )
}

export default App;
