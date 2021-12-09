import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home.js';
// import Nav from './Components/Nav'
import About from './Components/About'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Services} path="/services" />
        <Route component={Gallery} path="/gallery" />
        <Route component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </BrowserRouter>



  )
}

export default App;
