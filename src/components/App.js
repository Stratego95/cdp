import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ElementsOverview from './ElementsOverview';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/elements" exact component={ElementsOverview} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;