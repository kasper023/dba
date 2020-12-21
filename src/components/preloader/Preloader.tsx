import React from "react";
import prelodader from "../../images/user.png";


interface Props {

}


export default function Preloader({}: Props) {
    return (
        <div>
            <img src={prelodader}/>
        </div>

    )
}



