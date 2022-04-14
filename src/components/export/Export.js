import React from 'react';
import './Export.css'

const Export = () => {
  return (
    <div className="export">
      <div className="export_wrapper">
        <div className="export_title">
          <span>Biz dunyodamiz!</span>
          <h1>Biz qayerga eksport qilamiz?</h1>
          <hr />
        </div>
        <div className="container">
          <div className="txt__export">
            <p>
              Korxona sifatli o'yinchoqlar ishlab chiqarish orqali ko'plab
              davlatlar orasida taniqli bo'lib, eksport davlatlar soni 7 dan
              ortdi. Ulardan Rossiya, Qozog'iston, Qirg'ziston, Tojikiston,
              Gruziya va Ozarbayjon davlatlari bilan manfaatli aloqalar tez -
              tez amalga oshirilib turiladi
            </p>
          </div>
          <img src="https://therepublicoftoys.uz/img/home/map.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Export