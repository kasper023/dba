import React, {ReactElement, useContext, useState} from 'react'

import { AnimeModel } from "../../models/Anime";

import './Anime.css'
import {ThemeContext} from "../game/ThemeProvider";
interface Props {
    animeList: AnimeModel[]
}
//КОММЕНТ

export default function Anime({animeList}: Props): ReactElement {


    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
         <div className="anime">
             <div className="container">
                <div className="anime__wrapper">
                    <h1 className="anime__title">Top 8 anime</h1>
                    <div className="container2">
                        <div className="anime__list">
                        {animeList.map((category) => {
                            return <ul className="catalog">
                                <li className="card">
                                    <img className="card__image" src={category.image} alt="test"/>
                                    <div className="card__description">
                                        <h3 className="card__title">{category.name}</h3>
                                        <div className="card__rating">Rating: {category.rating}</div>
                                    </div>
                                </li>
                            </ul>
                            })
                        }
                        </div>
                    </div>
                </div>
                 <div onClick={toggleTheme} className="theme">
                     {theme === 'light' ? 'dark' : 'light'}
                 </div>
             </div>
         </div>

     );

 }
