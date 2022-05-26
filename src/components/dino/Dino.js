import React from 'react';
import { Link } from 'react-router-dom';

import './Dino.css';

const Dino = () => {
    return (
        <div className='dino'>
            <div className="dino_wrapper">
                <div className="dino_img">
                    <img src="https://therepublicoftoys.uz/img/home/dino.png" alt="" />
                </div>
                <div className="dino_text">
                    <div className="dino_title">
                        <span>Biz haqimizda</span>
                        <h1>Mo'jizaviy o'yinchoqlar ixtirochilari</h1>
                        <hr />
                    </div>
                    <div className="dino__txt__body">
                        <p>
                            Kompaniya 2009-yilda tashkil etilgan bo‘lib, hozirda yuzlab o‘yinchoqlar ishlab chiqarilmoqda. Korxona bolalar uchun turli turdagi plastik o‘yinchoqlar ishlab chiqaradi va ularni butun dunyoga eksport qiladi. O‘yinchoqlar zamonaviy texnologiyalar yordamida yuqori sifatli plastmassadan tayyorlangan.
                        </p>
                        <Link to='/about'>
                            <button  className="dino_btn">Batafsil
                                <img src="https://therepublicoftoys.uz/img/home/cardar.svg" alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dino;