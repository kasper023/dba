import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
        <div className="header">
            <div className="container">
                <NavLink className="header__link" to="/login">Home</NavLink>
                <NavLink className="header__link" to="/login">Login</NavLink>
                <NavLink className="header__link" to="/valid">Бейба's game</NavLink>
            </div>
        </div>
    )
}
