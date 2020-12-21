import React from "react";
import style from  './About.module.css'


interface Props{

};

export default function About({}: Props){
    return(
        <div className={style.about}>
            <div className={style.container}>
                <div className={style.about__title}>About us</div>
                <div className={style.about__wrapper}>
                    <div className={style.student}>
                        <a href="https://t.me/kasper_askar" target="_blank"><img className={style.student__img} src="https://static.hollywoodreporter.com/sites/default/files/2017/06/1343232_mkt-pm_got_s7_jaime_po_-_embed_2017-compressed.jpg" alt="user"/></a>
                        <h3 className={style.student__name}>Baigenzhin Askar</h3>
                    </div>
                    <div className="student">
                        <a href="https://t.me/beibarysmoldabek" target="_blank"><img className={style.student__img} src="https://static.hollywoodreporter.com/sites/default/files/2017/06/1343232_mkt-pm_got_s7_tormund_po_-_embed_2017-compressed.jpg" alt="user"/></a>
                        <h3 className={style.student__name}>Moldabekov Beibarys</h3>
                    </div>
                    <div className="student">
                        <a href="https://t.me/dorochimaru" target="_blank"><img className={style.student__img} src="https://static.hollywoodreporter.com/sites/default/files/2017/06/1343232_mkt-pm_got_s7_jon_po_-_embed_2017-compressed.jpg" alt="user"/></a>
                        <h3 className={style.student__name}>Zhetkergen Darkhan</h3>

                    </div>
                </div>
            </div>
        </div>
    );
}
