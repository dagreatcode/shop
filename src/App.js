import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import Shop from "./containers/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shop" component={Shop}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
