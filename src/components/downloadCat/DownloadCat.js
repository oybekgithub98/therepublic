import React from 'react';
import './DownloadCat.css';
import {BiDownload} from 'react-icons/bi';

const DownloadCat = () => {
  return (
    <div className='downloadCat'>
        <div className="downloadCat_wrapper">
            <button><BiDownload/>  Katalogni yuklab olish</button>
        </div>
    </div>
  )
}

export default DownloadCat