import React, { ReactElement, useState } from 'react'

import './Login.css'
interface Props {
    
}

export default function Login({}: Props): ReactElement {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(<></>)

    const submitForm = () => {
        if(localStorage['users']) {
            let user = JSON.parse(localStorage['users'])
            if(user.username != username) {
                alert('no user')
            }
            else if(user.password != password) {
                alert('password is invalid')
            }
            else {
                alert('welcome!')
            }
        }
        else {
            alert('no user')
        }
    }

    const clearForm = () => {
        setUsername('')
        setPassword('')
        document.querySelectorAll('input').forEach(e => {
            e.value = ''
        })
    }

    return (
        <div className="login">
            <div className="container">
                <div className="login__wrapper">
                    <input type="text" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/> <br/>
                    <input type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/> <br/>
                    <button onClick={() => {clearForm()}}>Cancel</button>
                    <button onClick={() => {submitForm()}}>Submit</button>
                </div>
            </div>
        </div>
    )
}
