import React from 'react';
import './Protsess.css';
import { useTranslation } from "react-i18next";

import tree from '../assets/tree.svg';

const Protsess = () => {
    const { t } = useTranslation();

  return (
    <div className='protsess'>
        <div className="protsess_title">
            <span>{("protses_span")}</span>
            <h1>{("protses_h1")}</h1>
            <hr className='productHr' />
        </div>
        <div className="body_protsess">
            
            <div className="protsess_column align_right">
                <p>{t("protses_right1")}</p>
                <p>{t("protses_right2")}</p>
                <p>{t("protses_right3")}</p>
                <p>{t("protses_right4")}</p>
                <p>{t("protses_right5")}</p>
                <p>{t("protses_right6")}</p>
            </div>
            <div className="img__protsess">
                <img src={tree} alt="protsess imae" />
            </div>
            <div className="protsess_column align_left">
                <p>{t("protses_left1")}</p>
                <p>{t("protses_left2")}</p>
                <p>{t("protses_left3")}</p>
                <p>{t("protses_left4")}</p>
                <p>{t("protses_left5")}</p>
                <p>{t("protses_left6")}</p>
            </div>
        </div>
    </div>
  )
}

export default Protsess