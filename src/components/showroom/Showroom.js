import React from 'react';
import './Showroom.css'
import Slider from "react-slick";

const Showroom = () => {
    return (
        <div className='showroom'>
            <div className="showroom_wrapper">
                <div className="farm">
                    <div className="showroom_title">
                        <span>360 darajada ko'ring</span>
                        <h1>Ko'rgazmalar</h1>
                        <hr />
                    </div>
                    <div className="showroom_container">
                        <div className="dubl">
                            <div className="item">
                                <img src="https://therepublicoftoys.uz/img/home/farm1.png" alt="" />
                                <button>
                                    <img src="https://therepublicoftoys.uz/img/home/360.svg" alt="" />
                                    Ko'rgazma zalini ko'rish
                                </button>
                            </div>
                            <div className="item">
                                <img src="https://therepublicoftoys.uz/img/home/farm2.png" alt="" />
                                <button>
                                    <img src="https://therepublicoftoys.uz/img/home/360.svg" alt="" />
                                    Ko'rgazma zalini ko'rish
                                </button>
                            </div>
                        </div>
                        <div className="partner">
                            <div className="partner_product">
                                <div className="partner_title">
                                    <span>ishonchdagi</span>
                                    <h1>Hamkorlar</h1>
                                    <hr />
                                </div>
                                <div className="partner_body">
                                    {/* shu yer */}
                                   
                                        <div className="partner_body_wrapper">
                                            <Slider
                                                slidesToShow={4}
                                                swipeToSlide={true}
                                                focusOnSelect={true}
                                            >
                                                <div className='partner_item'>
                                                    <img src="https://api.dev.therepublicoftoys.uz///img/img_83074293910718.png" alt="" />
                                                </div>
                                                <div className='partner_item'>
                                                    <img src="https://api.dev.therepublicoftoys.uz///img/img_21980324254312.png" alt="" />
                                                </div>
                                                <div className='partner_item'>
                                                    <img src="https://api.dev.therepublicoftoys.uz///img/img_49303481763834.png" alt="" />
                                                </div>
                                                <div className='partner_item'>
                                                    <img src="https://api.dev.therepublicoftoys.uz///img/img_78176096952030.png" alt="" />
                                                </div>
                                                <div className='partner_item'>
                                                    <img src="https://api.dev.therepublicoftoys.uz///img/img_71987393368772.png" alt="" />
                                                </div>
                                                <div className='partner_item'>
                                                    <img src="https://api.dev.therepublicoftoys.uz///img/img_81823329673681.png" alt="" />
                                                </div>
                                                <div className='partner_item'>
                                                    <img src="https://api.dev.therepublicoftoys.uz///img/img_35204388522615.png" alt="" />
                                                </div>
                                            </Slider>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showroom;