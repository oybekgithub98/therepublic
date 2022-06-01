import React from 'react';
import './AboutPage.css';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {

    const {t} = useTranslation();
    return (
        <div className="aboutPage">
            <div className="aboutPage_wrapper">
                <div className="about_text">
                    <h1>{t("about_h1")}</h1>
                    <p>{t("about_p")}</p>
                </div>
                <div className="about_galery">
                    <div className="about_item">
                        <img src="https://therepublicoftoys.uz/img/about/image%206.png" alt="" />
                        <img className='item_img' src="https://therepublicoftoys.uz/img/about/image%207.png" alt="" />
                        <img src="https://therepublicoftoys.uz/img/about/image%205.png" alt="" />
                        <img className='item_img' src="https://therepublicoftoys.uz/img/about/image%207.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;