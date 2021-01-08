import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Home from "../Home/Home";
import CardDetails from "../CardsDetails/CardsDetails";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

function Wrapper() {
  return (
    <div>
      <Router>
        <Navbar />
        <NavbarMobile />
        <Intro />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Details/:id" component={CardDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default Wrapper;
