import React, { ReactElement, useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import s from './Header.module.css'

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    
    const toggle_link = (e: any) => {
        let myLinks = document.querySelectorAll('.header__link_inner')
        
        for( let i = 0; i < myLinks.length; i++) {
            myLinks[i].classList.remove('header__link_inner_active')
            e.target.classList.add('header__link_inner_active')
        }
        
    }
    const [username, setUsername] = useState('')
    useEffect(() => {
        if(localStorage['users']) {
            setUsername(JSON.parse(localStorage['users']).username)
        }
    })
    const logout = () => {
        localStorage.removeItem('users')
        window.location.href='http://localhost:3001'
    }

    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.header__wrapper}>
                    <p className={s.header__link}>
                        <NavLink className={s.header__link_inner} to="/main" onClick={e => toggle_link(e)}>Home</NavLink>
                    </p>
                    <p className={s.header__link}>
                        <NavLink className={s.header__link_inner} to="/login" onClick={e => toggle_link(e)}>Login</NavLink>
                        /
                        <NavLink className={s.header__link_inner} to="/signup" onClick={e => toggle_link(e)}>Signup</NavLink>
                    </p>
                    <p className={s.header__link}>
                        <NavLink className={s.header__link_inner} to="/valid" onClick={e => toggle_link(e)}>Game</NavLink>
                    </p>
                    <p className={s.header__link}>
                        <NavLink className={s.header__link_inner} to="/anime" onClick={e => toggle_link(e)}>Anime</NavLink>
                    </p>
                    <p className={s.header__link}>
                        <NavLink className={s.header__link_inner} to="/about" onClick={e => toggle_link(e)}>About</NavLink>
                    </p>
                    <p className={s.header__link}>
                        <NavLink className={s.header__link_inner} to="/posts" onClick={e => toggle_link(e)}>Posts</NavLink>
                    </p>
                    <p className={s.header__link}>
                        <NavLink className={s.header__link_inner} to="/todolist" onClick={e => toggle_link(e)}>To Do</NavLink>
                    </p>
                    <p className={s.header__link}>
                        {username}
                    </p>
                    <p className={s.header__link}>
                        <button onClick={logout}>Logout</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
