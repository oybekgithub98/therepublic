import React from 'react'
import './Nav.css';

import { FiVolume2 } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {

  const [volume, setVolume] = React.useState(50);
  const location = useLocation()
  const navigate = useNavigate()
  
  const handleClick = (endpoint) =>{
    if(location?.pathname){
      navigate("/")
    }
  }
  return (
    <div className="nav">
      <div className="nav_wrapper">
        <div className='nav_logo'>
          <Link to="/">
            <img src="https://therepublicoftoys.uz/img/nav/logo.svg" alt="" />
          </Link>
        </div>
        <ul className='nav_collection'>
          <li><Link to="/">Asosiy</Link></li>
          <li><Link to="/product">Mahsulotlar</Link></li>
          <li><Link to="/about">Biz haqimizda</Link></li>
          <li><a onClick={handleClick.bind(null, "#showroom")} href="#showroom">Ko'rgazmalar</a></li>
          <li><a onClick={handleClick.bind(null, "#partner")} href="#partner">Hamkorlar</a></li>
          <li><a onClick={handleClick.bind(null, "#contact")} href="#contact">Bog'lanish</a></li>
          <li>
            <div className="volume">
              <div className="upper">
                <FiVolume2 className='volume_icon'/>
                <input defaultValue={volume} min={0} max={100} onChange={(e)=> {
                    setVolume(e.target.value)
                    console.log(e);
                }} type="range" className='volume_input'/>
                {/* <p>{volume}</p>  */}
              </div>
            </div>
          </li>
          <li>
            <select className='langSelect'>
              <option value="uz">uz</option>
              <option value="ru">ru</option>
              <option value="eng">eng</option>
            </select>
          </li>
          <li>
            <a href="tel: +998995244698">
              <button className='nav_button' type='role'>
                <img src="https://therepublicoftoys.uz/img/nav/call.svg" alt="" />
                <span>99 524 46 98</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>

    
  )
}

export default Nav;