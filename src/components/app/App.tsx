import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from '../header/Header';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Game from "../game/Game";
import './App.css';
import Validation from "../game/Validation";

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
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/valid">
          <Validation />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
