import React, {ReactElement, useContext, useEffect, useState} from 'react'

import {PostModel} from "../../models/Post";

import s from './Posts.module.css'
import {ThemeContext} from "../theme/ThemeProvider";

interface Props {
    postList: PostModel[]
}

export default function Posts({postList}: Props): ReactElement {
    const [message, setMessage] = useState('Hello,Dear Friend!!!');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState('')

    const [this_postList, setThis_postList] = useState(postList)

    const divRef = React.useRef<HTMLDivElement>(null);


    const {theme, toggleTheme} = useContext(ThemeContext);

    const add_post = () => {
        if (author.length > 3 && author.length < 10 && content) {
            postList.push({
                name: author,
                data: content
            })
            setThis_postList(postList)
            console.log(postList);
            show_posts()
        } else {
            alert('Invalid post')
        }
    }

    const show_posts = () => {
        setPosts(
            this_postList.map((category) => {
                return `<ul className={s.catalog}>
                    <li className={s.card}>

                        <div className={s.card__description}>
                            <h3 className={s.card__title}>${category.name}</h3>
                            <div className={s.card__data}>News: ${category.data}</div>

                        </div>

                    </li>
                </ul>`
            }).join('<br>')
        )
    }

    useEffect(() => {
        console.log('trigger use effect hook');

        setTimeout(() => {
            setMessage("You can add your news about something");
        }, 2000)
    })

    return (
        <div className={s.post} ref={divRef} style={{width: "100%"}}>
            <div className={s.container}>
                <h1>{message}</h1>
                <div className={s.new_post}>
                    <input className={s.new_post__input} placeholder="Author"
                           onChange={(e) => setAuthor(e.target.value)}></input>
                    <textarea className={s.new_post__input} placeholder="Content"
                              onChange={(e) => setContent(e.target.value)}></textarea>
                    <button onClick={add_post}>Add post</button>
                </div>
                <div className={s.post__wrapper}>
                    <h1 className={s.post__title}>News</h1>
                    <div className={s.container2}>
                        <div className={s.post__list}>
                            {this_postList.map((category) => {
                                return (
                                <React.Fragment key={category.data}>
                                    <ul className={s.catalog}>
                                    <li className={s.card}>

                                        <div className={s.card__description}>
                                            <dt className={s.card__title}>News by {category.name}</dt>
                                            <dd className={s.card__data}> {category.data}</dd>
                                        </div>

                                    </li>
                                </ul>
                                </React.Fragment>
                                )
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
