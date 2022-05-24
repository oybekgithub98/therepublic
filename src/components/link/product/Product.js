import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './Product.css';
import axios from "axios";

const Product = ({products, items, filterItems, categories, activeCategory }) => {
  const [data, setdata] = useState([])

  useEffect(() => {
      if(activeCategory === "All" || !activeCategory){
        setdata([...products])
      } else {
        setdata(products.filter(product => product.type === activeCategory))
      } 
    
  }, [activeCategory, products]);

  
  
  console.log(activeCategory.length, data)
  
  return <div className="react-tabs">
  {products?.length ? 
    <div className="react-tabs_wrapper">
      <div className="tabs_menu">
        <h2>kategoriya</h2>
        <ul className='tabs_collection' role="tablits">
          {
            categories.map((category, index) =>
            (<li key={index} onClick={() => filterItems(category)} className="react-tabs__tab">
              <span style={activeCategory === category || category === "All" && !activeCategory ? { color: "coral" } : null}>{category}</span>
            </li>)
            )
          }
        </ul>
      </div>
      <div className="tabs_panel">
        <h1>Mahsulotlar</h1>
        <div className="offers">
          {data?.length && 
           data?.map((menuItem) => {
              const { id, img1, case_uz, title_uz } = menuItem;
              return (
                <Link to={`/product/${id}`} key={id}>
                  <div className='offer'>
                    <img src={'https://api.dev.therepublicoftoys.uz'+ img1} alt="" />
                    <p>{title_uz}</p>
                    <span>{case_uz}</span>
                    <div className="hover__offer">
                      <span>Подробнее</span>
                      <img src="https://therepublicoftoys.uz/img/home/cardar.svg" alt="" />
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
    : <div className='loader-box'>
      <h1>Loading...</h1>
    </div>
      }
   </div>
}



export default Product;