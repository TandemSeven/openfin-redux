import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import { Home, Window } from './pages';

export const App = (props) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home {...props} />
      </Route>
      <Route path="/window">
        <Window {...props} />
      </Route>
    </Switch>
  </Router>
);
