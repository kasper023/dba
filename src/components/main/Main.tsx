import React, { ReactElement } from 'react';
import './Main.css'



interface Props {
    
}

export default function Main({}: Props): ReactElement {
    return (
        <div className="main">
            <div className="container">
                <h1 className="title main__title">Welcome to pure site</h1>
                <div className="main__wrapper">
                    <div className="main__intro">
                        <h2>This site was done by:</h2>
                        <p className="main__name">Baigenzhin Askar</p>
                        <p className="main__name">Moldabekov Beibarys</p>
                        <p className="main__name">Zhetkergen Darkhan</p>
                    </div>
                    <iframe className="main__video" src="https://www.youtube.com/embed/oJwMiU3RJmA"></iframe>
                </div>
            </div>
        </div>
    )
 }
