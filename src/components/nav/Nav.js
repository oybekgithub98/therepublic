import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next"

import { FiVolume2 } from 'react-icons/fi';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

import './Nav.css';

const Nav = () => {

  const { t, i18n, ready } = useTranslation();
  const [volume, setVolume] = useState(50);
  const [language, setLanguage] = useState("uz");
  const location = useLocation();
  const navigate = useNavigate();
  const [homburger, setHomburger] = useState(false);


  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  const changeLanguage = (e) => {
    setLanguage(e.target.value)
  };

  const handleClick = (endpoint) => {
    if (location?.pathname) {
      navigate("/")
    }
  }

  const LanguageSet = () => {
    if (ready) {
      return (
        <select className='langSelect' value={language} onChange={changeLanguage}>
          <option value="en">en</option>
          <option value="uz">uz</option>
          <option value="ru">ru</option>
        </select>
      );
    }
  };

  const hamburger = () => {
    setHomburger(!homburger)
  }

  return (
    <div className="nav">
      <div className="nav_wrapper">
        <div className='nav_logo'>
          <Link to="/">
            <img src="https://therepublicoftoys.uz/img/nav/logo.svg" alt="" />
          </Link>
        </div>
        <ul className={homburger ? "nav_collection active" : "nav_collection"}>
          <li onClick={hamburger}><NavLink to="/">{t("asosiy")}</NavLink></li>
          <li onClick={hamburger}><NavLink to="/product">{t("mahsulot")}</NavLink></li>
          <li onClick={hamburger}><NavLink to="/about">{t("haqimizda")}</NavLink></li>
          <li onClick={hamburger}><a onClick={handleClick.bind(null, "#showroom")} href="#showroom">{t("korgazmalar")}</a></li>
          <li onClick={hamburger}><a onClick={handleClick.bind(null, "#partner")} href="#partner">{t("hamkorlar")}</a></li>
          <li onClick={hamburger}><a onClick={handleClick.bind(null, "#contact")} href="#contact">{t("boglanish")}</a></li>
          <li>
            <div className="volume">
              <div className="upper">
                <FiVolume2 className='volume_icon' />
                <input defaultValue={volume} min={0} max={100} onChange={(e) => {
                  setVolume(e.target.value)
                  console.log(e);
                }} type="range" className='volume_input' />
                {/* <p>{volume}</p>  */}
              </div>
            </div>
          </li>
          <li>
            <LanguageSet />
          </li>
          <li onClick={hamburger}>
            <a href="tel: +998995244698">
              <button className='nav_button' type='role'>
                <img src="https://therepublicoftoys.uz/img/nav/call.svg" alt="" />
                <span>99 524 46 98</span>
              </button>
            </a>
          </li>
        </ul>
        <div class="hamb" onClick={hamburger}>
          <span>
            <img src="https://therepublicoftoys.uz/img/home/hamb.svg" alt="toys" />
          </span>
        </div>
      </div>
    </div>


  )
}

export default Nav;
