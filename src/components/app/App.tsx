import React, {lazy, Suspense} from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Header from '../header/Header';
import Login from '../validations/login/Login';
import Signup from '../validations/signup/Signup';
import Game from "../game/Game";
import style from './App.module.css';
import Validation from "../validations/Validation";
import Main from '../main/Main';
import Footer from '../footer/Footer';
import {ThemeProvider} from "../theme/ThemeProvider";
import About from "../aboutus/About";
import {postList} from "../../models/Post";
import ErrorBoundary from "../error/ErrorBoundary";
import Preloader from "../preloader/Preloader";
import Products from "../Products";
import { AppProvider } from "../context";
import List from "../List";

//lazy
const Anime = lazy(() => import("../anime/Anime"));
const Posts = lazy(()=>import("../posts/Posts"))


function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Preloader/>}>
                <div className={style.app}>

                    <Header/>
                    <AppProvider>
                        <Products />
                        <List />
                    </AppProvider>
                    <Route path="/main">
                        <ErrorBoundary>
                            <Main/>
                        </ErrorBoundary>
                    </Route>
                    <Route path="/login">
                        <ErrorBoundary>
                            <Login/>
                        </ErrorBoundary>
                    </Route>
                    <Route path="/signup">
                        <ErrorBoundary>
                            <Signup/>
                        </ErrorBoundary>
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
                            <ErrorBoundary>
                                <Anime/>
                            </ErrorBoundary>
                        </ThemeProvider>
                    </Route>
                    <Route path="/about">
                        <ErrorBoundary>
                            <About/>
                        </ErrorBoundary>
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
