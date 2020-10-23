import React, { ReactElement } from 'react'

import './Footer.css'
interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <div className="footer__icons">
                            <a target="_blank" href="https://www.instagram.com/" className="footer__link">Instagram</a>
                            <a target="_blank" href="https://www.facebook.com/" className="footer__link">Facebook</a>
                            <a target="_blank" href="https://www.youtube.com/" className="footer__link">YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
