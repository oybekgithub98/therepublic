import React from 'react';
import ProductBody from '../productBody/ProductBody';
import './Product.css';

const Product = () => {
  return (
    <div className='product'>
        <div className="title">
            <span>kategoriya</span>
            <h1>Mahsulotlar</h1>
            <hr className='productHr' />
        </div>
        <ProductBody/>
    </div>
  )
}

export default Product

