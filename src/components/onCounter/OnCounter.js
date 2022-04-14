import React from 'react'
import './OnCounter.css';

const OnCounter = () => {
    return (
        <div className='on_counter'>
            <div className="counter_wrapper">
                <div className="on_counter_title">
                    <span>infografika</span>
                    <h1>Raqamlardagi statistika</h1>
                    <button className="on_counter_title_btn"></button>
                </div>
                <div className="on_counter_card">
                    <div className="on_counter_card_wrapper">
                        <div className="counter_card">
                            <h1>350<span>+</span></h1>
                            <p>Mahsulot turlari</p>
                        </div>
                        <div className="counter_card1">
                            <h1>13 yil</h1>
                            <p>O'yinchoqlar ishlab chiqarish tajribasi</p>
                        </div>
                        <div className="counter_card">
                            <h1>100<span>+</span></h1>
                            <p>Mutaxassislar soni</p>
                        </div>
                        <div className="counter_card1">
                            <h1>7</h1>
                            <p>Eksport qilinadigan davlat</p>
                        </div>
                    </div>
                    <p className="counter_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magnafringilla urna, <br /> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. </p>
                </div>
            </div>
        </div>
    )
}

export default OnCounter;