import React, {useState} from 'react';
import './DownloadCat.css';
import {BiDownload} from 'react-icons/bi';


const DownloadCat = () => { 
  return (
    <div className='downloadCat'>
        <div className="downloadCat_wrapper">
            <a href="/img/pdf (1).pdf" download="pdf">
              <button><BiDownload/>Katalogni yuklab olish</button>
            </a>
        </div>
    </div>
  )
}

export default DownloadCat