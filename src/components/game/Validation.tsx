import React, {ReactElement, useState} from "react";
import Game from "./Game";

interface Props {

}

export default function Validation({}: Props):ReactElement{
    const [nickname1, setNickname1] = useState('')
    const [nickname2, setNickname2] = useState('')
    function SubmitForm(){
        if(nickname1.length >= 8 && nickname2.length >= 8) {
            alert("everything ok :)")
            window.location.href = 'http://localhost:3000/game';
        }
        else{
            alert('nickname doesnt correct')
        }
    }
    return (
        <div className={"validation"}>
            <div className={"container"}>
                <input type="text" placeholder="Nickname for first user" onChange={(e) => {setNickname1(e.target.value)}}/> <br/>
                <input type="text" placeholder="Nickname for second user" onChange={(e) => {setNickname2(e.target.value)}}/> <br/>
                <button onClick={() => {SubmitForm()}}>Let's start</button>
            </div>
        </div>
    );
}
