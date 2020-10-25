import React, {ReactElement, useContext, useState} from 'react'

import { AnimeModel } from "../../models/Anime";

import './Anime.css'
import {ThemeContext} from "../theme/ThemeProvider";
interface Props {
    animeList: AnimeModel[]
}

export default function Anime({animeList}: Props): ReactElement {

    const divRef = React.useRef<HTMLDivElement>(null);

    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
         <div className="anime">
             <div className="container">
                <div className="anime__wrapper">
                    <h1 className="title anime__title">Top 10 products</h1>
                    <div className="container2">
                        <div className="anime__list">
                        {animeList.map((category) => {
                            return <ul className="catalog">
                                <li className="card">
                                    <img className="card__image" src={category.image} alt="test"/>
                                    <div className="card__description">
                                        <h3 className="card__title">{category.name}</h3>
                                        <div className="card__rating">Rating: {category.rating}<i className="fa fa-star" aria-hidden="true"></i></div>
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
