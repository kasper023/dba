import React, { ReactElement, useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

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
        window.location.href='http://localhost:3000'
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <p className="header__link">
                        <NavLink className="header__link_inner" to="/main" onClick={e => toggle_link(e)}>Home</NavLink>
                    </p>
                    <p className="header__link">
                        <NavLink className="header__link_inner" to="/login" onClick={e => toggle_link(e)}>Login</NavLink>
                        /
                        <NavLink className="header__link_inner" to="/signup" onClick={e => toggle_link(e)}>Signup</NavLink>
                    </p>
                    <p className="header__link">
                        <NavLink className="header__link_inner" to="/valid" onClick={e => toggle_link(e)}>Game</NavLink>
                    </p>
                    <p className="header__link">
                        <NavLink className="header__link_inner" to="/anime" onClick={e => toggle_link(e)}>Anime</NavLink>
                    </p>
                    <p className="header__link">
                        <NavLink className="header__link_inner" to="/about" onClick={e => toggle_link(e)}>About</NavLink>
                    </p>
                    <p className="header__link">
                        {username}
                    </p>
                    <p className="header__link">
                        <button onClick={logout}>Logout</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
