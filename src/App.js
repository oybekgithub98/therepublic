import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Product from './components/link/product/Product';

import tabsData from './components/assets/data';
import './App.css';
import OfferPage from './components/link/offerPage/OfferPage';

const allCategories = ['All', ...new Set(tabsData.map((item) => item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(tabsData);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("")

  const filterItems = (category) => {
    if(category === 'All') {
      setMenuItems(tabsData)
      setActiveCategory("All")
      return;
    }
    const newItems = tabsData.filter((item) => item.category === category)
    setMenuItems(newItems);
    setActiveCategory(category)
  }

  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home filterItems={filterItems}/>} />
    
        <Route path='/product' element={<Product items={menuItems} activeCategory={activeCategory} categories={categories} filterItems={filterItems} />} />
        <Route path="/product/:id" element={ <OfferPage />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;