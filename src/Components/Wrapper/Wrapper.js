import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Home from "../Home/Home";
import CardDetails from "../CardsDetails/CardsDetails";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

function Wrapper() {
  return (
    <div>
      <Router>
        <Navbar />
        <NavbarMobile />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Details/:id" component={CardDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default Wrapper;
