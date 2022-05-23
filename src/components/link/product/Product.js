import React from 'react';
import './Product.css';

const Product = ({ items, filterItems, categories, activeCategory }) => {
   
  return (
    <div className="react-tabs">
      <div className="react-tabs_wrapper">
        <div className="tabs_menu">
          <h2>kategoriya</h2>
          <ul className='tabs_collection' role="tablits">
            {
              categories.map((category, index) =>               
                ( <li key={index} onClick={() => filterItems(category)} className="react-tabs__tab">
                    <span style={activeCategory === category ? {color: "red"}: null}>{category}</span>
                  </li>)
                )
            }
          </ul>
        </div>
        <div className="tabs_panel">
          <h1>Mahsulotlar</h1>
          <div className="offers">
            {
              items.map((menuItem) => {
                const { id, img, text, desc } = menuItem;
                return (
                  <a href='#' key={id}>
                    <div className='offer'>
                      <img src={img} alt="" />
                      <p>{text}</p>
                      <span>{desc}</span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src="https://therepublicoftoys.uz/img/home/cardar.svg" alt="" />
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;