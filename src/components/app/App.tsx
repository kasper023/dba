import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from '../header/Header';
import Login from '../login/Login';
import Signup from '../signup/Signup';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
