import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import WhereISS from './WhereISS';
import Challenge from './Challenge.js';
import Crew from './Crew.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/WhereISS" component={WhereISS} />
        <Route exact path="/Challenge" component={Challenge} />
        <Route exact path="/Crew" component={Crew} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Footer" component={Footer} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
