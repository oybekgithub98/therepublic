import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Product.css';
import { useTranslation } from "react-i18next"
import {MdDoubleArrow} from 'react-icons/md';

const Product = ({products, filterItems, categories, activeCategory }) => {

  const { t } = useTranslation();
  const [data, setdata] = useState([]);
  const [productSidebar, setProductSidebar] = useState(false);

  useEffect(() => {
      if(activeCategory === "All" || !activeCategory){
        setdata([...products])
      } else {
        setdata(products.filter(product => product.type === activeCategory))
      } 
    
  }, [activeCategory, products]);

  const clickSidebar = () => {
    setProductSidebar(!productSidebar)
  }
  
  return <div className="react-tabs">
  {products?.length ? 
    <div className="react-tabs_wrapper">
      <div className={productSidebar ? "tabs_menu active" : "tabs_menu"}>
        <h2>{t("tabs_menu_h2")}</h2>
        <ul className="tabs_collection">
          {
            categories.map((category, index) =>
            (<li key={index} onClick={() => {filterItems(category) ; setProductSidebar(false)}} className="react-tabs__tab">
              <span style={activeCategory === category || category === "All" && !activeCategory ? { color: "coral" } : null}>{category}</span>
            </li>)
            )
          }
        </ul>
        <div onClick={clickSidebar} className='tabs_menuClose'><MdDoubleArrow /></div>
      </div>
      <div className="tabs_panel">
        <div className='tabs_sidebar'>
          <div className='sidebar' onClick={clickSidebar}>
            kategoriya
          </div>
          <h1>{t("tabs_panel_h1")}</h1>
        </div>
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
                      <span>{t("hover__offer_span")}</span>
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