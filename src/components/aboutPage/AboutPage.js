import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="aboutPage">
            <div className="aboutPage_wrapper">
                <div className="about_text">
                    <h1>Biz haqimizda</h1>
                    <p>Bizning o'yinchoqlar fabrikamiz 2009-yilda tashkil topgan bo'lib, o'rta osiyodagi eng yirik zavodlardan biri hisoblanadi. Har yili Rossiya, Tojikiston, Qozoqiston, Azarbayjon, Qirg'iziston , Gruziya va boshqa davlatlarga katta miqdorda eksport amalga oshiradi. Hozirgi kunda, korxonamizda 40dan ziyod ishchi kuchi bo'lib, har bir mahsulotga alohida yondashilinadi. Bizning afvazlliklarimiz shundaki: o'yinchoqlarimizning barchasi yuqori sifatli plastmassalardan zamonaviy uskunalar yordamida ishlab chiqariladi. Yana bir ajoyib tomoni shundaki, bizdagi barcha mahsulotlar xilma-xilligi va rang- barangligi bilan ajralib turadi. Mijozlarimizning fikricha biz ishlab chiqarayotgan plastmassa o'yinchoqlar bolalar uchun eng xavsizidir. Farzandingizning bo'sh vaqtlari biz bilan yanada maroqli va zavqli. Bizning o'yinchoqlar kichkintoyingiz uchun eng yaxshi tanlovdir.</p>
                </div>
                <div className="about_galery">
                    <div className="about_item">
                        <img src="https://therepublicoftoys.uz/img/about/image%206.png" alt="" />
                        <img className='item_img' src="https://therepublicoftoys.uz/img/about/image%207.png" alt="" />
                        <img src="https://therepublicoftoys.uz/img/about/image%205.png" alt="" />
                        <img className='item_img' src="https://therepublicoftoys.uz/img/about/image%207.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;