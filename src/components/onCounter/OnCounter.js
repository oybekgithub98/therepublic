import React from 'react';
import { useTranslation } from "react-i18next";

import './OnCounter.css';

const OnCounter = () => {
    const { t } = useTranslation();

    return (
        <div className='on_counter'>
            <div className="counter_wrapper">
                <div className="on_counter_title">
                    <span>{t("counter_span")}</span>
                    <h1>{t("counterh1")}</h1>
                    <button className="on_counter_title_btn"></button>
                </div>
                <div className="on_counter_card">
                    <div className="on_counter_card_wrapper">
                        <div className="counter_card">
                            <h1>350<span>+</span></h1>
                            <p>{t("counter_card_p1")}</p>
                        </div>
                        <div className="counter_card1">
                            <h1>13 yil</h1>
                            <p>{t("counter_card_p2")}</p>
                        </div>
                        <div className="counter_card">
                            <h1>100<span>+</span></h1>
                            <p>{t("counter_card_p3")}</p>
                        </div>
                        <div className="counter_card1">
                            <h1>7</h1>
                            <p>{t("counter_card_p4")}</p>
                        </div>
                    </div>
                    <p className="counter_text">{t("counter_text")}</p>
                </div>
            </div>
        </div>
    )
}

export default OnCounter;