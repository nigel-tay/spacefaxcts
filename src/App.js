import './App.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Mars from "./components/Mars";
import Earth from "./components/Earth";
import Spotd from "./components/Spotd";
import React from "react";
import Spirit from "./rovers/Spirit";
import Curiosity from "./rovers/Curiosity";
import ScrollToTop from "./general/ScrollToTop";
import Mission from "./rovers/Mission";
import Opportunity from "./rovers/Opportunity";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mars" exact>
            <Mars />
          </Route>
          <Route path="/mars/spirit">
            <Spirit />
          </Route>
          <Route path="/mars/opportunity">
            <Opportunity />
          </Route>
          <Route path="/mars/curiosity">
            <Curiosity />
          </Route>
          <Route path="/mars/:id">
            <Mission />
          </Route>
          <Route path="/earth">
            <Earth />
          </Route>
          <Route path="/spotd">
            <Spotd />
          </Route>
        </Switch>
    </BrowserRouter>

  );
}

export default App;
