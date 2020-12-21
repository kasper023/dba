import React, {ReactElement, useContext, useEffect, useState} from 'react'
import {PostModel} from "../../models/Post";
import s from './Posts.module.css'
import {ThemeContext} from "../theme/ThemeProvider";
import showAnime from "../../axios/axios";



interface Props {

}

export default function Posts({}: Props): ReactElement {
    const [message, setMessage] = useState('Hello,Dear Friend!!!');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState<PostModel[]>([])
    const divRef = React.useRef<HTMLDivElement>(null);
    const[pressed,setPressed]=useState(false)


    const {theme, toggleTheme} = useContext(ThemeContext);





    useEffect(() => {
        console.log('trigger use effect hook');

        setTimeout(() => {
            setMessage("You can add your news about something");
        }, 2000)

    })

    useEffect(()=>{
        async function getPost (){
            const response = await showAnime.get('/postList')
            const posts = response.data
            setPosts(posts)
            setPressed(false)


        }
        getPost()

    },[pressed]
    )


    async function Add(){
        let posts:PostModel={id:5,name:author,data:content}
       const response= await showAnime.post("/postList",posts)
        setPressed(true)


    }



    return (
        <div className={s.post} ref={divRef} style={{width: "100%"}}>
            <div className={s.container}>
                <h1>{message}</h1>
                <div className={s.new_post}>
                    <input className={s.new_post__input} placeholder="Author"
                           onChange={(e) => setAuthor(e.target.value)}></input>
                    <textarea className={s.new_post__input} placeholder="Content"
                              onChange={(e) => setContent(e.target.value)}></textarea>
                    <button onClick={Add} >Add post</button>
                </div>
                <div className={s.post__wrapper}>
                    <h1 className={s.post__title}>News</h1>
                    <div className={s.container2}>
                        <div className={s.post__list}>
                            {posts.map((category) => {
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
