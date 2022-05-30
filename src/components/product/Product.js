import React from 'react';
import ProductBody from '../productBody/ProductBody';
import { useTranslation } from "react-i18next";
import './Product.css';

const Product = ({filterItems}) => {

  const { t } = useTranslation();
  
  return (
    <div className='product'>
        <div className="product_title">
            <span>{t("productSpan")}</span>
            <h1>{t("producth1")}</h1>
            <hr className='productHr' />
        </div>
        <ProductBody filterItems={filterItems}/>
    </div>
  )
}

export default Product;