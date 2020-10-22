import React, { ReactElement, useState } from 'react'

import './Login.css'
interface Props {
    
}

export default function Login({}: Props): ReactElement {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(<></>)

    return (
        <div className="login">
            <h1>Login</h1>
        </div>
    )
}
