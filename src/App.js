import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Product from './components/link/product/Product';

import tabsData from './components/assets/data';
import './App.css';

const allCategories = ['All', ...new Set(tabsData.map((item) => item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(tabsData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'All') {
      setMenuItems(tabsData)
      return;
    }
    const newItems = tabsData.filter((item) => item.category === category)
    setMenuItems(newItems);
  }

  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product items={menuItems} categories={categories} filterItems={filterItems} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;