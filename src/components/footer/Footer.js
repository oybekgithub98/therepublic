import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_wrapper">
        <div className="logo">
            <a href="#">
                <img src="https://therepublicoftoys.uz/img/footer/logo.svg" alt="" />
            </a>
        </div>
        <div className="social">
            <p>Ijtimoiy tarmoqlarimizga obuna bo'ling va so'nggi yangiliklardan xabardor bo'ling!</p>
            <div className="networking">
                <a href=""><img src="https://therepublicoftoys.uz/img/footer/telegram.svg" alt="" /></a>
                <a href=""><img src="https://therepublicoftoys.uz/img/footer/facebook.svg" alt="" /></a>
                <a href=""><img src="https://therepublicoftoys.uz/img/footer/igram.svg" alt="" /></a>
            </div>
        </div>
        <div className="adress">
            <div className="row">
                <img src="https://therepublicoftoys.uz/img/footer/call.svg" alt="" />
                <div className='text'>
                    <h3>+998 (71) 248-34-94</h3>
                    <p>Har kuni soat 9:00 dan 20:00 gacha</p>
                </div>
            </div>
            <div className="row">
                <img src="https://therepublicoftoys.uz/img/footer/loca.svg" alt="" />
                <div className='text'>
                    <p>Toshkent shahri, Olmazor tumani, Qorasaroy ko‘chasi 3-uy</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer