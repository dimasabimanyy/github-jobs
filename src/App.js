import React from "react";
import Home from "./pages/Home.js";
import singleJob from "./pages/SingleJob.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/job/:id" exact component={singleJob} />
      </Switch>
    </Router>
  );
}
