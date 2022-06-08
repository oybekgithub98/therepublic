import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from "react-i18next"

import './OfferPage.css';

const OfferPage = ({ products }) => {
  const { t } = useTranslation();
  const [product, setProduct] = useState(null)
  const [isDataFetching, setIsDataFetching] = useState(false)
  const { id: productId } = useParams();
  const [isNotSubmitted, setIsNotSubmitted] = useState(true)
  const input1 = useRef();
  const input2 = useRef();
  

  const [orderOpen, setOrderOpen] = useState(false);
  const toggleModal =(e)=> {
 
    if(e.target.classList.contains("child")){
      return;
    }
    setOrderOpen(!orderOpen)
  }
  const sendData = (e)=>{
 
    setTimeout(()=>{

      if(!input1.current.value.trim().length ||
         !input1.current.value.trim().toLowerCase()
         .match(
           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         ) || 
         !input2.current.value.trim().length){
        return;
      }
      
      setOrderOpen(false)
    }, 3000)
  }
  
  useEffect(()=>{
    const body = document.body
    if(orderOpen){
      body.style.overflow = "hidden"
    } else {
      body.style.overflow = "visible"
    }
  }, [orderOpen])

  useEffect(() => {
    axios
      .get(`https://api.dev.therepublicoftoys.uz/api/v1/offers/${Number(productId)}`)
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    window.scrollTo(0, 180)
    console.log(window)
  }, [productId]);


  var settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };

  // console.log(products)
 
  return <>
    {product ? <div className="offerPage">
      <div className="offerPage_wrapper">
        <div className="item__offer">
          <div className="carousel carousel-slider">
            <div className='itemImg1'>
              <img className='item__offer_img' src={'https://api.dev.therepublicoftoys.uz' + product.img1} alt="" />
            </div>
          </div>
          <div className="carousel">
            <div className='itemImg2'>
              <img className='item__offer_img' src={'https://api.dev.therepublicoftoys.uz' + product.img2} alt="" />
            </div>
            <div className='itemImg2'>
              <img className='item__offer_img' src={'https://api.dev.therepublicoftoys.uz' + product.img3} alt="" />
            </div>
          </div>
        </div>
        <div className='item__offer sp__around'>
          <h1>{t("item_offer_h1")}</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>{t("artikul")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>{product.articul}</td>
              </tr>
              <tr>
                <td>
                  <span>{t("EAN-13")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <img className='reactShtrixCode' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79lIyOGMSZlOT23QQOZJG51dH3aHfElyjeA&usqp=CAU" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("o'yinchoq_o'lchami")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.size_toy}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("Qadoqlash_turi")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.casegroup_en}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("Paket_hajmi")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.size_case}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("toplam_turi")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.case_en}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("taxminiy_hajmi")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.weight}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("Paket_miqdori")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.count}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t("Sertifikat")}</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <a href={`https://api.dev.therepublicoftoys.uz/${product.file}`} download target="blank" className='sp__aroundBtn'>{t("offer_download")}</a>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={toggleModal}>Order
                   
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={orderOpen ? "openOrder active" : "openOrder"} onClick={toggleModal}>
        <div className="openOrder_wrapper child">
          <form className='child' onSubmit={e => {
            e.preventDefault()
            setIsNotSubmitted(false)
            setIsDataFetching(true)
            setTimeout(()=> setIsDataFetching(false) ,3000)
            }}>
            <input type="email" ref={input1} className='child' placeholder='Phone number or e-mail' name='number' required />
            <input type="text" ref={input2} className='child' placeholder='Name' name="name" required />
            <button className='child' onMouseDown={sendData}> 
            {!isNotSubmitted && isDataFetching ? "Loading" : "Order"}
            </button>
          </form>
        </div>
      </div>
    </div> :
      <h1>Loading...</h1>
    }
    <div className='offerPageSlider'>
      <div className="offerPageSlider_wrapper">
        <Slider slidesToShow={5} swipeToSlide={true} focusOnSelect={true} {...settings}>
          {products?.map(({ img1, title_uz, case_uz, id }) => (
            <Link to={`/product/${id}`} key={id}>
              <div className='offer'>
                <img src={'https://api.dev.therepublicoftoys.uz' + img1} alt="" />
                <p>{title_uz}</p>
                <span>{case_uz}</span>
                <div className="hover__offer">
                  <span>{t("hover__offer_span")}</span>
                  <img src="https://therepublicoftoys.uz/img/home/cardar.svg" alt="" />
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  </>
}

export default OfferPage;