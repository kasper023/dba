import React, {lazy,Suspense} from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Header from '../header/Header';
import Login from '../validations/login/Login';
import Signup from '../validations/signup/Signup';
import Game from "../game/Game";
import './App.css';
import Validation from "../validations/Validation";
import Main from '../main/Main';
import Footer from '../footer/Footer';
import {ThemeProvider} from "../theme/ThemeProvider";
import About from "../aboutus/About";
import Posts from "../posts/Posts";
import {postList} from "../../models/Post";
import {animeList} from "../../models/Anime";

const Anime = lazy(()=> import("../anime/Anime"));


function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
            <div className="app">
                <Header/>
                <Route path="/main">
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
                <Route path="/posts">
                    <ThemeProvider>
                    <Posts postList={postList}/>
                    </ThemeProvider>
                </Route>
                <Footer/>
            </div>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
