import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import data from "../../assets/data"
import './OfferPage.css';

const OfferPage = () => {
  const [product, setProduct] = useState(null)
  const {id: productId} = useParams()

  useEffect(()=>{
    setProduct(data.find(val => val.id === Number(productId)))
  }, [])
  console.log(product);
  return <>
    {product ? <div className="offerPage">
    <div className="offerPage_wrapper">
      <div className="item__offer">
        <div className="carousel carousel-slider">
          <div className='itemImg1'>
            <img className='item__offer_img' src={product?.img} alt="" />
          </div>
        </div>
        <div className="carousel">
          <div className='itemImg2'>
            <img className='item__offer_img' src="https://api.dev.therepublicoftoys.uz/img/img_33594416843588.png" alt="" />
          </div>
          <div className='itemImg2'>
            <img className='item__offer_img' src="https://api.dev.therepublicoftoys.uz/img/img_33594416843588.png" alt="" />
          </div>
        </div>
      </div>
      <div className='item__offer sp__around'>
      </div>
    </div>
  </div> :
  <h1>Loading...</h1>
}
</>
  
}

export default OfferPage
