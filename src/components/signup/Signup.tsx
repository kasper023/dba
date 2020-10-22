import React, { ReactElement, useState } from 'react'

import { User } from '../../models/User'

import './Signup.css'
interface Props {
    
}

export default function Signup({}: Props): ReactElement {
    
    const [username, setUsername] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(<></>)

    function submitForm() {
        if(mail.indexOf('@') === -1) {
            alert('Mail is invalid')
        }
        else if(password.length < 6) {
            alert('Password is invalid')
        }
        else {
            alert('Created!')
        }

        let user: User

        user = {
            username: username,
            email: mail,
            password: password
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

    return (
        <div className="signup">
            <div className="container">
                <input type="text" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/> <br/>
                <input type="text" placeholder="e-mail" onChange={(e) => {setMail(e.target.value)}}/> <br/>
                <input type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/> <br/>
                <button onClick={() => {submitForm()}}>Submit</button>
            </div>
        </div>
    )
}
