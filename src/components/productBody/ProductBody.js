import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./ProductBody.css";
import { useTranslation } from "react-i18next";

const ProductBody = ({ filterItems }) => {
  const { t } = useTranslation();

  var settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };
   
  return (
    <div className="productBody">
      <div className="productBody_wrapper">
        <Slider
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings}
        >
          <div
            className="product_item"
            onClick={filterItems.bind(null, "уморазвития")}
          >
            <Link to="/product">
              <img
                src="https://therepublicoftoys.uz/img/home/ayiqcha.png"
                alt=""
              />
            </Link>       
            <h5>{t("Aqliy_rivojlanish_uchun_oyinchoqlar")}</h5>
          </div>
          <div
            className="product_item"
            onClick={filterItems.bind(null, "Машинки")}
          >
            <Link to="/product">
              <img
                src="https://therepublicoftoys.uz/img/home/kamazcard.png"
                alt=""
              />
            </Link>
            <h5>{t("Avtomobillar")}</h5>
          </div>
          <div
            className="product_item"
            onClick={filterItems.bind(null, "Конструкторы")}
          >
            <Link to="/product">
              <img
                src="https://therepublicoftoys.uz/img/home/shtuk.png"
                alt=""
              />
            </Link>
            <h5>{t("Konstruktorlar")}</h5>
          </div>
          <div
            className="product_item"
            onClick={filterItems.bind(null, "девчонок")}
          >
            <Link to="/product">
              <img
                src="https://therepublicoftoys.uz/img/home/kazan.png"
                alt=""
              />
            </Link>
            <h5>{t("Qizlar_uchun_oyinchoqlar")}</h5>
          </div>
          <div
            className="product_item"
            onClick={filterItems.bind(null, "Спортивные")}
          >
            <Link to="/product">
              <img
                src="https://therepublicoftoys.uz/img/home/skill.png"
                alt=""
              />
            </Link>
            <h5>{t("Sport_oyinchoqlari")}</h5>
          </div>
          <div
            className="product_item"
            onClick={filterItems.bind(null, "плашадок")}
          >
            <Link to="/product">
              <img
                src="https://therepublicoftoys.uz/img/home/umer.png"
                alt=""
              />
            </Link>
            <h5>{t("Argimchoqlar")}</h5>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default ProductBody;
