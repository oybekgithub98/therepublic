import React from 'react';
import ProductBody from '../productBody/ProductBody';
import './Product.css';

const Product = ({filterItems}) => {
  
  return (
    <div className='product'>
        <div className="product_title">
            <span>kategoriya</span>
            <h1>Mahsulotlar</h1>
            <hr className='productHr' />
        </div>
        <ProductBody filterItems={filterItems}/>
    </div>
  )
}

export default Product;