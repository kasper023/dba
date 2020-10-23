import React, {createRef, ReactElement, useState} from "react";
import Game from "./Game";

interface Props {

}

export default function Validation({}: Props):ReactElement{
    const [nickname1, setNickname1] = useState('')
    const [nickname2, setNickname2] = useState('')
    const textInput = createRef<HTMLInputElement>()
    function SubmitForm(){
        if(nickname1.length >= 8 && nickname2.length >= 8) {
            alert("everything ok :)")
            window.location.href = 'http://localhost:3000/game';
        }
        else{
            alert('nickname doesnt correct')
        }
        if(textInput.current){
            textInput.current.focus()
        }
    }
    return (
        <div className={"validation"}>
            <div className={"container"}>
                <form action="#">
                <input type="text" placeholder="Nickname for first user" onChange={(e) => {setNickname1(e.target.value)}} style={{
                    marginBottom:"20px",}} ref={textInput} required/> <br/>
                <input type="text" placeholder="Nickname for second user" onChange={(e) => {setNickname2(e.target.value)}} style={{
                    marginBottom:"20px",}}  required/> <br/>
                <button onClick={() => {SubmitForm()}}>Let's start</button>
                </form>
            </div>
        </div>
    );
}
