import React from 'react';
import Slider from "react-slick";
import "./ProductBody.css";

const ProductBody = () => {
  return (
    <div className='productBody'>
      <div className="productBody_wrapper">
        <Slider
          // asNavFor={nav1}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/ayiqcha.png" alt="" />
            <h5>Aqliy rivojlanish uchun o'yinchoqlar</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/kamazcard.png" alt="" />
            <h5>Avtomobillar</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/shtuk.png" alt="" />
            <h5>Konstruktorlar</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/kazan.png" alt="" />
            <h5>Qizlar uchun o'yinchoqlar</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/skill.png" alt="" />
            <h5>Sport o'yinchoqlari</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/umer.png" alt="" />
            <h5>Argimchoqlar</h5>
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default ProductBody;