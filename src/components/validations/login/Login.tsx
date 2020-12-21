import React, { ReactElement, useState, useEffect } from 'react'

import s from './Login.module.css'
interface Props {
    
}

export default function Login({}: Props): ReactElement {
    
    // const [name, setName] = useState('');

    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(<></>)
    
    useEffect(() => {
        document.title = 'welcome, ' + username
    })
    
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
        <div className={s.login}>
            <div className={s.container}>
                <div className={s.login__wrapper}>
                    <h1 className={s.login__title}>Login</h1>
                    <div className={s.form}>
                        <input type="text" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/> <br/>
                        <input type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/> <br/>
                        <div className={s.buttons}>
                            <button onClick={() => {clearForm()}}>Cancel</button>
                            <button onClick={() => {submitForm()}}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
