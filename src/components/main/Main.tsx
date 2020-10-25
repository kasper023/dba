import React, { ReactElement } from 'react';
import './Main.css'



interface Props {
    
}

export default function Main({}: Props): ReactElement {
    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <h1 className="main__title">Welcome to pure site</h1>
                </div>
            </div>
        </div>
    )
 }
