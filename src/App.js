import React, { Fragment } from "react";
import Home from "./components/Home";
import Africa from "./components/Africa";
import America from "./components/America";
import LayoutPrincipal from "./layout/LayoutPrincipal";
import { Router, Route, IndexRoute, browserHistory } from "react-router-3";

import "./styles.css";

function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={LayoutPrincipal}>
        <IndexRoute component={Home} />
        <Route path="/africa" component={Africa} />
        <Route path="/america" component={America} />
      </Route>
    </Router>
  );
}

export default App;
