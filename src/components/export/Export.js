import React from 'react';
import { useTranslation } from "react-i18next";

import './Export.css'

const Export = () => {

  const { t } = useTranslation();

  return (
    <div className="export">
      <div className="export_wrapper">
        <div className="export_title">
          <span>{t("export_span")}</span>
          <h1>{t("expost_h1")}</h1>
          <hr />
        </div>
        <div className="container">
          <div className="txt__export">
            <p>
              {t("export_p")}
            </p>
          </div>
          <img src="https://therepublicoftoys.uz/img/home/map.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Export