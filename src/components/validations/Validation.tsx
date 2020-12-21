import React, {createRef, ReactElement, useEffect, useState} from "react";


interface Props {

}

export default function Validation({}: Props): ReactElement {
    const [nickname1, setNickname1] = useState('')
    const [nickname2, setNickname2] = useState('')

    useEffect(() => {
        let nick1 = document.querySelector('#nick1')
        let nick2 = document.querySelector('#nick2')
        let nick11 = nickname1
        let nick22 = nickname2
        if (nick1) {
            console.log(nick11);

            if (nick11.length < 8) {
                nick1.classList.add('nick_alarm')
            } else {
                nick1.classList.remove('nick_alarm')
            }
        }
        if (nick2) {
            if (nick22.length < 8) {
                nick2.classList.add('nick_alarm')
            } else {
                nick2.classList.remove('nick_alarm')
            }
        }
    })


    const textInput = createRef<HTMLInputElement>()

    function SubmitForm() {
        if (nickname1.length >= 8 && nickname2.length >= 8) {
            alert("everything ok :)")
            window.location.href = 'http://localhost:3000/game';
        } else {
            alert('nickname doesnt correct')
        }
        if (textInput.current) {
            textInput.current.focus()
        }
    }

    return (
        <div className={"validation"}>
            <div className={"container"}>
                <h1 className="title valid__title">
                    Validation
                </h1>
                <form action="/game" className="form">
                    <input id="nick1" type="text" placeholder="Nickname for first user" onChange={(e) => {
                        setNickname1(e.target.value)
                    }} style={{
                        marginBottom: "20px",
                    }} ref={textInput} required/> <br/>
                    <input id="nick2" type="text" placeholder="Nickname for second user" onChange={(e) => {
                        setNickname2(e.target.value)
                    }} style={{
                        marginBottom: "20px",
                    }} required/> <br/>
                    <button onClick={() => {
                        SubmitForm()
                    }}>Let's start
                    </button>
                </form>
            </div>
        </div>
    );
}
