import React, { ReactElement } from 'react'

import s from './Footer.module.css'
interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.footer__wrapper}>
                    <div className={s.footer__item}>
                        <div className={s.footer__icons}>
                            <a target="_blank" href="https://www.instagram.com/" className={s.footer__link}>Instagram</a>
                            <a target="_blank" href="https://www.facebook.com/" className={s.footer__link}>Facebook</a>
                            <a target="_blank" href="https://www.youtube.com/" className={s.footer__link}>YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
