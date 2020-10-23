import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from '../header/Header';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Game from "../game/Game";
import Anime from "../anime/Anime";
import { animeList } from "../../models/Anime"
import './App.css';
import Validation from "../game/Validation";

import Main from '../main/Main';
import Footer from '../footer/Footer';

import {ThemeProvider} from "../game/ThemeProvider";



function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Route path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/game">
          <ThemeProvider>
            <Game />
          </ThemeProvider>
        </Route>
        <Route path="/valid">
          <Validation />
        </Route>
        <Route path="/anime">
          <ThemeProvider>
            <Anime animeList={animeList} />
          </ThemeProvider>
        </Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
