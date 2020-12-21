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
                        <a href="https://t.me/kasper_askar" target="_blank"><img className={style.student__img} src="https://cdn4.telesco.pe/file/myu082sYBgQyQu4TbErGK64jJaJRPgHTXGiRFNSuePJbOr-RL6i3V3SU6_Sx16-ylEitUFf1PK7JrUJIi_7OhhOAnui6PjWJCIOwnrxoj2mwl5N2FgpAiA19-ZhsNaj1OVNn3cWwfyrOyUl9LAkiabPuX876oF_ekw-S7iSD3I2sFeQjb88bIh75FMMftSwYvnAOdEXClw-5FIigEXXLhFJJEhgDZeNnsSbfSWvu4dVTWjP5MJKj74rOiRx70ls7guh6hHtsJZCyZNjEuWVZCXFmDx7t9Y5_-Elv8x8bEQe0h_mOndiUGDVb77QMl1jHeBvy_2oT6iFcBY6-49w5Vw.jpg" alt="user"/></a>
                        <h3 className={style.student__name}>Baigenzhin Askar</h3>
                    </div>
                    <div className="student">
                        <a href="https://t.me/beibarysmoldabek" target="_blank"><img className={style.student__img} src="https://cdn4.telesco.pe/file/dCjZOXB-HjkP-WiMEReSuKCiLPu6GJX5-xKdNah6KgJ_brA-F9nNzVihSU7J4as-Dr9NBpKkjp-UDPbkoLAE9O_u7iy2FBxYfWwNOkhq3Qm8OwJfq8fe0iamY0MUjZPjDaklmzsT0grcUNkemKajXh4nkiPNbS2KSqp7YgfE8pm8N6PPWC_OLOjmGJoMKfJ-ByJH05_jbQV7zqXJDBAXhRyH8BQJHtougEkl-u3THxmtFuA4yTYazf8seEb48AhllDHwTAmCAs8Y7J3Z5AcuS9SMnyQbtk19MUVWemJHC1KW2hr8PiaHs1qZZjM5nrH2qU4KNnd6X-u_8UPxDzi9XA.jpg" alt="user"/></a>
                        <h3 className={style.student__name}>Moldabekov Beibarys</h3>
                    </div>
                    <div className="student">
                        <a href="https://t.me/dorochimaru" target="_blank"><img className={style.student__img} src="https://cdn4.telesco.pe/file/hMvBkytFOC3A_0jPMW22uoEuW_-b8LvFmw5uSB_M9jklidRATmJzF1wK_9tDvBoLT8FGaObV_dBgFIxAl5BiUugcY_cnxYkb8LXwEG6yskaLogACbozobdEc5Md3Nup69m7eyiKuYWI9RWur10Rq8aKsjSe3-39I7HmTUTHtzexRbzF_ia_R4QMFCGvFoJVXfSgiwC-RazU9HblxcUm-na5d8OIXX9F1SYTM3Aq3YU05rw4LO3vHqAKrJ5sQR9eXtPQO8G9Be-ARTuz_CSZM5HQG_9A1tGT3ljFI2-PvZbv539oVlAI1WzuOViLSZgebOpsAC_gx1ufh8w1qTXG1nw.jpg" alt="user"/></a>
                        <h3 className={style.student__name}>Zhetkergen Darkhan</h3>

                    </div>
                </div>
            </div>
        </div>
    );
}
