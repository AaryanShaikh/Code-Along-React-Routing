import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Header />
        </div>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
