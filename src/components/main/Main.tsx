import React, { ReactElement } from 'react';
import s from './Main.module.css';


interface Props {
    
}

export default function Main({}: Props): ReactElement {

    return (
        <div className={s.main}>
            <div className={s.container}>
                <h1 className={s.main__title}>Welcome to pure site</h1>
                <div className={s.main__wrapper}>
                    <div className={s.main__intro}>
                        <h2>This site was done by:</h2>
                        <p className={s.main__name}>Baigenzhin Askar</p>
                        <p className={s.main__name}>Moldabekov Beibarys</p>
                        <p className={s.main__name}>Zhetkergen Darkhan</p>
                    </div>
                    <iframe className={s.main__video} src="https://www.youtube.com/embed/oJwMiU3RJmA"></iframe>
                </div>

            </div>


        </div>
    )
 }
