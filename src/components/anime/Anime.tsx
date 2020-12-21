import React, {ReactElement, useContext, useEffect,Fragment, useState} from 'react'
import { AnimeModel } from "../../models/Anime";
import s from './Anime.module.css'
import {ThemeContext} from "../theme/ThemeProvider";
import showAnime from "../../axios/axios";


interface Props {

}

export default function Anime({}: Props): ReactElement {

    const [anime, setAnime] = useState<AnimeModel[]>([])
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        async function getAnimeList() {
            const response = await showAnime.get('/animeList')
            const animes = response.data
            setAnime(animes)
        }
            getAnimeList()
    }, [])
    
    return (
         <div className={s.anime}>
             <div className={s.container}>
                <div className={s.anime__wrapper}>
                    <h1 className={s.anime__title}>Top 10 Animes</h1>
                    <div className={s.container2}>
                        <div className={s.anime__list}>
                        {anime.map((category) => {
                            return <ul className={s.catalog}>

                                <li className={s.card}>
                                    <img className={s.card__image} src={category.image} alt="test"/>
                                    <div className={s.card__description}>
                                        <h3 className={s.card__title}>{category.name}</h3>
                                        <div className={s.card__rating}>Rating: {category.rating}<i className="fa fa-star" aria-hidden="true"></i></div>
                                    </div>
                                </li>

                            </ul>
                            })
                        }
                        </div>
                    </div>
                </div>
                 <div onClick={toggleTheme} className={s.theme}>
                     {theme === 'light' ? 'dark' : 'light'}
                 </div>
             </div>
         </div>

     );

 }
