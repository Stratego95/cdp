import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ElementsOverview from "./ElementsOverview";
import ManageGymnasts from "./ManageGymnasts";
import Header from "./Header";
import Home from "./Home";
import { withAuthenticator } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/elements" exact component={ElementsOverview} />
          <Route path="/gymnasts" exact component={ManageGymnasts} />
        </Switch>
      </Router>
    </div>
  );
};

export default withAuthenticator(App);
