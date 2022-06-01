import { useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Product from './components/link/product/Product';
import axios from "axios";
import tabsData from './components/assets/data';
import './App.css';
import OfferPage from './components/link/offerPage/OfferPage';
import AboutPage from './components/aboutPage/AboutPage';
import ScrollArrow from './components/scrollArrow/ScrollArrow';

// const allCategories = ['All', ...new Set(tabsData.map((item) => item.category))]
const allCategories = ["All", "плашадок", "Спортивные", "девчонок", "Конструкторы", "Машинки", "уморазвития"]

function App() {


  const [menuItems, setMenuItems] = useState(tabsData);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("")
  const [products, setProducts] = useState([])

 

  useEffect(()=>{
    axios.get("https://api.dev.therepublicoftoys.uz/api/v1/offers")
    .then(response =>{
     setProducts(response.data)
    })
    .catch(err => console.error(err))
  }, [])

  const filterItems = (category) => {
    if(category === 'All') {
      setMenuItems(products)
      setActiveCategory("All")
      return;
    }
    const newItems = products.filter((item) => item.type === category)
    setMenuItems(newItems);
    
    setActiveCategory(category)
  }
  

  return (
    <div className="app">
      <Nav />
      {/* <Routes>
        <Route path='/' element={<Home filterItems={filterItems}/>} />
        <Route path='/product' element={<Product products={products} items={menuItems} activeCategory={activeCategory} categories={categories} filterItems={filterItems} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<OfferPage products={products} />}/>
      </Routes>
      <Footer />
      <ScrollArrow /> */}
    </div>
  );
}

export default App;