import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Header from '../header/Header';
import Login from '../validations/login/Login';
import Signup from '../validations/signup/Signup';
import Game from "../game/Game";
import Anime from "../anime/Anime";
import {animeList} from "../../models/Anime"
import './App.css';
import Validation from "../validations/Validation";

import Main from '../main/Main';
import Footer from '../footer/Footer';

import {ThemeProvider} from "../game/ThemeProvider";
import About from "../aboutus/About";
import Posts from "../posts/Posts";
import {postList} from "../../models/Post";


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Route path="/">
                    <Main/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <Route path="/game">
                    <ThemeProvider>
                        <Game/>
                    </ThemeProvider>
                </Route>
                <Route path="/valid">
                    <Validation/>
                </Route>
                <Route path="/anime">
                    <ThemeProvider>
                        <Anime animeList={animeList}/>
                    </ThemeProvider>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Footer/>
                <Route path="/posts">
                    <Posts postList={postList}/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
