import React from "react";
import Home from "./pages/Home.js";
import singleJob from "./pages/SingleJob.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/job/:id" component={singleJob} />
      </Switch>
    </Router>
  );
}
