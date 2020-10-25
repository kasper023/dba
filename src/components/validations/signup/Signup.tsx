import React, { ReactElement, useEffect, useState } from 'react'

import { User } from '../../../models/User'

import './Signup.css'
interface Props {
    
}

export default function Signup({}: Props): ReactElement {
    
    const [username, setUsername] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(<></>)
    let user: User

    useEffect(() => {
        user = {
            username: username,
            email: mail,
            password: password
        }
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        let pass = document.querySelector('#pass')
        if(pass) {
            if(!strongRegex.test(password)) {
                pass.classList.add('pass_alarm')
            }
            else {
                pass.classList.remove('pass_alarm')
            }
        }
    })

    function submitForm() {
        if(localStorage['user']) {
            alert('User already signed up')
        }
        else {
            let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
            if(mail.indexOf('@') === -1) {
                alert('Mail is invalid')
            }
            else if(!strongRegex.test(password)) {
                alert('Password is invalid')
            }
            else {
                alert('Created!')
            }

            if(localStorage['users']) {
                console.log(localStorage['users']);
                console.log(JSON.parse(localStorage['users']));
                
            }
            else {
                localStorage['users'] = JSON.stringify(user)
                console.log(JSON.stringify(user));
            }
        }
        clearForm()
    }

    const clearForm = () => {
        setUsername('')
        setMail('')
        setPassword('')
        document.querySelectorAll('input').forEach(e => {
            e.value = ''
        })
    }

    return (
        <div className="signup">
            <div className="container">
                <div className="signup__wrapper">
                    <h1 className="title signup__title">Sign Up</h1>
                    <div className="form">
                        <input type="text" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/> <br/>
                        <input type="text" placeholder="e-mail" onChange={(e) => {setMail(e.target.value)}}/> <br/>
                        <input id="pass" type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/> <br/>
                        <div className="buttons">
                            <button onClick={() => {clearForm()}}>Cancel</button>
                            <button onClick={() => {submitForm()}}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
