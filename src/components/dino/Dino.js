import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import './Dino.css';

const Dino = () => {
    const { t } = useTranslation();

    return (
        <div className='dino'>
            <div className="dino_wrapper">
                <div className="dino_img">
                    <img src="https://therepublicoftoys.uz/img/home/dino.png" alt="" />
                </div>
                <div className="dino_text">
                    <div className="dino_title">
                        <span>{t("dinoSpan")}</span>
                        <h1>{t("dinoh1")}</h1>
                        <hr />
                    </div>
                    <div className="dino__txt__body">
                        <p>
                            {t("dino__txt_p")}
                        </p>
                        <Link to='/about'>
                            <button  className="dino_btn">{t("Batafsil")}
                                <img src="https://therepublicoftoys.uz/img/home/cardar.svg" alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dino;