import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./HomeHeader";
import HomeMain from "./HomeMain";
import Footer from "./HomeFooter";

import DescripcionProducto from "../routes/DescripcionProducto";

const Home = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path={`/DescripcionProducto/:id`}>
            <DescripcionProducto />
          </Route>
          <Route exact path="/">
            <HomeMain />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default Home;
