import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';


import "./ProductBody.css";

const ProductBody = ({getInfo, filterItems}) => {
  return (
    <div className='productBody'>
      <div className="productBody_wrapper">
        <Slider
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className='product_item' onClick={filterItems.bind(null, "Aqliy rivojlanish uchun o'yinchoq")}>
            <Link to="/product">
              <img src="https://therepublicoftoys.uz/img/home/ayiqcha.png" alt="" />
            </Link>
            <h5>Aqliy rivojlanish uchun o'yinchoqlar</h5>
          </div>
          <div className='product_item' onClick={filterItems.bind(null, "Avtomobillar")}>
            <Link to='/product'>
              <img src="https://therepublicoftoys.uz/img/home/kamazcard.png" alt="" />
            </Link>
            <h5>Avtomobillar</h5>
          </div>
          <div className='product_item' onClick={filterItems.bind(null, "Konstruktorlar")}>
            <Link to='/product'>
              <img src="https://therepublicoftoys.uz/img/home/shtuk.png" alt="" />
            </Link>
            <h5>Konstruktorlar</h5>
          </div>
          <div className='product_item' onClick={filterItems.bind(null, "Qizlar uchun o'yinchoq")}>
            <Link to='/product'>
              <img src="https://therepublicoftoys.uz/img/home/kazan.png" alt="" />
            </Link>
            <h5>Qizlar uchun o'yinchoqlar</h5>
          </div>
          <div className='product_item'  onClick={filterItems.bind(null, "Sport o'yinchoqlari")}>
            <Link to='/product'>
              <img src="https://therepublicoftoys.uz/img/home/skill.png" alt="" />
            </Link>
            <h5>Sport o'yinchoqlari</h5>
          </div>
          <div className='product_item' onClick={filterItems.bind(null, "Arg'imchoqlar")}>
            <Link to='/product'>
              <img src="https://therepublicoftoys.uz/img/home/umer.png" alt="" />
            </Link>
            <h5>Argimchoqlar</h5>
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default ProductBody;