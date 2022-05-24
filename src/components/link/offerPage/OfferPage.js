import React, { useEffect, useState } from 'react';
import data from "../../assets/data"
import './OfferPage.css';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const OfferPage = ({products}) => {
  const [product, setProduct] = useState(null)
  const { id: productId } = useParams()
 
  useEffect(() => {
    axios
      .get(`https://api.dev.therepublicoftoys.uz/api/v1/offers/${Number(productId)}`)
      .then(function (response) {
        setProduct(response.data);
       
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);
  return <>
    {product ? <div className="offerPage">
      <div className="offerPage_wrapper">
        <div className="item__offer">
          <div className="carousel carousel-slider">
            <div className='itemImg1'>
              <img className='item__offer_img' src={'https://api.dev.therepublicoftoys.uz'+ product.img1} alt="" />
            </div>
          </div>
          <div className="carousel">
            <div className='itemImg2'>
              <img className='item__offer_img' src={'https://api.dev.therepublicoftoys.uz'+ product.img2} alt="" />
            </div>
            <div className='itemImg2'>
              <img className='item__offer_img' src={'https://api.dev.therepublicoftoys.uz'+ product.img3} alt="" />
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
                <td>{product.articul}</td>
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
                  <span>{product.size_toy}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Qadoqlash turi</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.casegroup_en}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Paket hajmi</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.size_case}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Ko'p to'plam turi</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.case_en}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Paketning taxminiy hajmi</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.weight}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Paket miqdori</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <span>{product.count}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Sertifikat №1</span>
                  <img className='aroundImg' src="https://www.polesie-toys.com/static/img/icons/question.svg" alt="" />
                </td>
                <td>
                  <a href={`https://api.dev.therepublicoftoys.uz/${product.file}`} download target="blank" className='sp__aroundBtn'>Yuklab olish</a>
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
