import { useState } from 'react';
import './Showroom.css'
import Slider from "react-slick";
import { MdClose } from 'react-icons/md'

const Showroom = () => {

    const [isModelOpen, setIsModelOpen] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    const toggleModal = () => setIsModelOpen(!isModelOpen);
    const activateModal = (currentButton) => {
        toggleModal(!isModelOpen);
        setActiveCard(currentButton)
    }

    return (
        <div className='showroom' id="showroom">
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
                                <button onClick={activateModal.bind(null, 1)}>
                                    <img src="https://therepublicoftoys.uz/img/home/360.svg" alt="" />
                                    Ko'rgazma zalini ko'rish
                                </button>
                            </div>
                            <div className="item">
                                <img src="https://therepublicoftoys.uz/img/home/farm2.png" alt="" />
                                <button onClick={activateModal.bind(null, 2)}>
                                    <img src="https://therepublicoftoys.uz/img/home/360.svg" alt="" />
                                    Ko'rgazma zalini ko'rish
                                </button>
                            </div>
                            <div className={isModelOpen ? 'active dublItemClick' : 'dublItemClick'}>
                                {activeCard === 1 ?
                                    <iframe src="https://therepublicoftoys.uz/showroom/showroom1/ToyShowRoom/index.htm" frameborder="0"></iframe> :
                                    <iframe src="https://therepublicoftoys.uz/showroom/showroom2/ToyFactory/index.htm" frameborder="0"></iframe>}
                                <button className='dublItemClickBtn' onClick={toggleModal}><MdClose className='closeToggleModal' /></button>
                            </div>
                        </div>
                        <div className="partner" id="partner">
                            <div className="partner_product">
                                <div className="partner_title">
                                    <span>ishonchdagi</span>
                                    <h1>Hamkorlar</h1>
                                    <hr />
                                </div>
                                <div className="partner_body">
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