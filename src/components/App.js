import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ElementsOverview from "./ElementsOverview";
import ManageGymnasts from "./ManageGymnasts";
import Header from "./Header";
import Home from "./Home";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Hub, Auth } from "aws-amplify";

export const CurrentUser = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUserInfo();
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
          console.log("Sign in failure", data);
          break;
      }
    });
    setUserInfo();
  }, []);

  const setUserInfo = () => {
    Auth.currentAuthenticatedUser()
      .then((userData) => setUser(userData.username))
      .catch(() => console.log("Not signed in"));
  };

  return (
    <div>
      <CurrentUser.Provider value={user}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/elements" exact component={ElementsOverview} />
            <Route
              path="/gymnasts"
              exact
              component={withAuthenticator(ManageGymnasts)}
            />
          </Switch>
        </Router>
      </CurrentUser.Provider>
    </div>
  );
};

export default App;
