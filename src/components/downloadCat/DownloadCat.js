import React from 'react';
import './DownloadCat.css';
import {BiDownload} from 'react-icons/bi';
import { useTranslation } from "react-i18next"


const DownloadCat = () => { 
  const { t } = useTranslation();
  
  return (
    <div className='downloadCat'>
        <div className="downloadCat_wrapper">
            <a href="/img/pdf (1).pdf" download="pdf">
              <button><BiDownload/>{t("Katalogni_yuklab_olish")}</button>
            </a>
        </div>
    </div>
  )
}

export default DownloadCat