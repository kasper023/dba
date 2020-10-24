import React, {ReactElement, useContext, useState} from 'react'

import {PostModel} from "../../models/Post";

import './Posts.css'
import {ThemeContext} from "../game/ThemeProvider";
interface Props {
    postList: PostModel[]
}
//КОММЕНТ

export default function Posts({postList}: Props): ReactElement {

    const divRef = React.useRef<HTMLDivElement>(null);

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="anime">
            <div className="container">
                <div className="anime__wrapper">
                    <h1 className="anime__title">News</h1>
                    <div className="container2">
                        <div className="anime__list">
                            {postList.map((category ) => {
                                return <ul className="catalog">
                                    <li className="card">

                                        <div className="card__description">
                                            <h3 className="card__title">{category.name}</h3>
                                            <div className="card__rating">News: {category.data}</div>
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
