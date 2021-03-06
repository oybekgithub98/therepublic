import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";

import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

  return (
    <div className='footer'>
        <div className="footer_wrapper">
        <div className="logo">
            <Link to="/">
                <img src="https://therepublicoftoys.uz/img/footer/logo.svg" alt="" />
            </Link>
        </div>
        <div className="social">
            <p>{t("social_p")}</p>
            <div className="networking">
                <a href="https://t.me/therepublicoftoys" target="blank"><img src="https://therepublicoftoys.uz/img/footer/telegram.svg" alt="" /></a>
                <a href="https://www.facebook.com/Polimer-Plastik_uz-106158995132744/" target="blank"><img src="https://therepublicoftoys.uz/img/footer/facebook.svg" alt="" /></a>
                <a href="https://www.instagram.com/polimerplastikuz/?utm_medium=copy_link" target="blank"><img src="https://therepublicoftoys.uz/img/footer/igram.svg" alt="" /></a>
            </div>
        </div>
        <div className="adress">
            <div className="row">
                <img src="https://therepublicoftoys.uz/img/footer/call.svg" alt="" />
                <div className='text'>
                    <h3>+998 (71) 248-34-94</h3>
                    <p>{t("adress_p")}</p>
                </div>
            </div>
            <div className="row">
                <img src="https://therepublicoftoys.uz/img/footer/loca.svg" alt="" />
                <div className='text'>
                    <p>{t("text_p")}</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer