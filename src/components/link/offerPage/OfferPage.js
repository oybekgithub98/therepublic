import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../assets/data"
import './OfferPage.css';

const OfferPage = () => {
  const [product, setProduct] = useState(null)
  const { id: productId } = useParams()

  useEffect(() => {
    setProduct(data.find(val => val.id === Number(productId)))
  }, [productId])
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
              <img className='item__offer_img' src={product?.img} alt="" />
            </div>
            <div className='itemImg2'>
              <img className='item__offer_img' src={product?.img} alt="" />
            </div>
          </div>
        </div>
        <div className='item__offer sp__around'>
          <h1>Plastic toy set "Large house"</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>Artikul</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>PP 2019-018</td>
              </tr>
              <tr>
                <td>
                  <span>EAN-13</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <img className='reactShtrixCode' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79lIyOGMSZlOT23QQOZJG51dH3aHfElyjeA&usqp=CAU" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Yig'ilgan o'yinchoq o'lchami</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>0.1</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Qadoqlash turi</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>corrugated box</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Paket hajmi</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>145*72*68</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Ko'p to'plam turi</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>corrugated box</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Paketning taxminiy hajmi</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>0.1</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Paket miqdori</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>1</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Sertifikat №1</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <a href='https://api.dev.therepublicoftoys.uz///files/img_24302836317084.pdf' download target="blank" className='sp__aroundBtn'>Yuklab olish</a>
                </td>
              </tr>
              <tr>
                <td>
                  <button>Order</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> :
      <h1>Loading...</h1>
    }
  </>
}

export default OfferPage
