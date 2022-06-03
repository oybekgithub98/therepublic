import { useEffect, useState } from 'react';
import Slider from "react-slick";
import Contact from '../contact/Contact';
import Dino from '../dino/Dino';
import DownloadCat from '../downloadCat/DownloadCat';
import Export from '../export/Export';
import OnCounter from '../onCounter/OnCounter';
import Product from '../product/Product';
import Protsess from '../protsess/Protsess';
import Showroom from '../showroom/Showroom';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"

import "./Home.css";

const Home = ({ filterItems }) => {
  const { t } = useTranslation();
  const [nav2, setNav2] = useState();

  useEffect(() => {
    setNav2();
  }, [nav2]);


  return (
    <>
      <div className="swiper" style={{ padding: "0 30px", }}>
        <Slider className="mainSlider" asNavFor={nav2}>
          <div className="swiper_item">
            <div className="swiper_text">
              <h1>{t('homeSlider1')}</h1>
              <Link to="/product" className="swiper_btn"><span>{t("Batafsil")}</span>
                <img src="https://therepublicoftoys.uz/static/media/btnarrow.a886bf66.svg" alt="" />
              </Link>
            </div>
            <div className="swiper_img">
              <img
                src="https://therepublicoftoys.uz/img/home/kamaz2.png"
                alt=""
              />
            </div>
          </div>
          <div className="swiper_item">
            <div className="swiper_text">
              <h1>{t('homeSlider2')}</h1>
              <Link to="/product" className="swiper_btn"><span>{t("Batafsil")}</span>
                <img src="https://therepublicoftoys.uz/static/media/btnarrow.a886bf66.svg" alt="" />
              </Link>
            </div>
            <div className="swiper_img">
              <img
                src="https://therepublicoftoys.uz/img/home/kamaz3.png"
                alt=""
              />
            </div>
          </div>
          <div className="swiper_item">
            <div className="swiper_text">
              <h1>{t('homeSlider3')}</h1>
              <Link to="/product" className="swiper_btn"><span>{t("Batafsil")}</span>
                <img src="https://therepublicoftoys.uz/static/media/btnarrow.a886bf66.svg" alt="" />
              </Link>
            </div>
            <div className="swiper_img">
              <img src="https://therepublicoftoys.uz/img/home/kamaz.png" alt="" />
            </div>
          </div>
        </Slider>
      </div>

      <DownloadCat />
      <Product filterItems={filterItems} />
      <Dino />
      <OnCounter />
      <Protsess />
      {/*<Export />
      <Showroom />
      <Contact /> */}
    
    </>
  )
}

export default Home