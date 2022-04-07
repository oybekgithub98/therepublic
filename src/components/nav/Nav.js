import React from 'react'
import './Nav.css';

import { FiVolume2 } from 'react-icons/fi';

const Nav = () => {

  const [volume, setVolume] = React.useState(50);


  return (
    <div className="nav">
      <div className="nav_wrapper">
        <div className='nav_logo'>
          <img src="https://therepublicoftoys.uz/img/nav/logo.svg" alt="" />
        </div>
        <ul className='nav_collection'>
          <li><a href="#">Asosiy</a></li>
          <li><a href="#">Mahsulotlar</a></li>
          <li><a href="#">Biz haqimizda</a></li>
          <li><a href="#">Ko'rgazmalar</a></li>
          <li><a href="#">Hamkorlar</a></li>
          <li><a href="#">Bog'lanish</a></li>
          <li>
            <select className='langSelect'>
              <option value="uz">uz</option>
              <option value="ru">ru</option>
              <option value="eng">eng</option>
            </select>
          </li>
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
            <a href="#">
              <button className='nav_button' type='role'>
                <img src="" alt="" />
                <span>99 111 23 45</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>

    
  )
}

export default Nav;