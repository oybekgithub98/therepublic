import React from 'react';
import './Protsess.css';
import tree from '../assets/tree.svg';

const Protsess = () => {
  return (
    <div className='protsess'>
        <div className="protsess_title">
            <span>Jarayon</span>
            <h1>Biz o'yinchoqlarni qanday ishlab chiqaramiz</h1>
            <hr className='productHr' />
        </div>
        <div className="body_protsess">
            
            <div className="protsess_column align_right">
                <p>Yuqori sifatli plastik xom ashyo (propellium, polietilen)ni xarid qilinadi</p>
                <p>Bolalar xavfsizligi uchun xom ashyo maxsus jihozlar yordamida qaytadan tozalanadi</p>
                <p>Mahsulot uchun kerakli qoliplar mexaniklar yordamida mashinalarga joylanadi</p>
                <p>Mashinalarda ishlash uchun yetarli ishchi kuchini yollanadi</p>
                <p>Mahsulotni sifatli chiqarish maqsadida, mashinaning funktsiyalarini sozlanadi</p>
                <p>Mashinalar kerakli haroratda ishga tushadi</p>
            </div>
            <div className="img__protsess">
                <img src={tree} alt="protsess imae" />
            </div>
            <div className="protsess_column align_left">
                <p>Tayyor bo'lgan mahsulotlarni karton qutilarga joylab, omborxonaga yuboriladi</p>
                <p>Har bir mahsulot yuqori sifatda qadoqlanadi</p>
                <p>Mahsulotga bezak berish maqsadida bezak-yopishtirgichlar yopishtiriladi</p>
                <p>Mahsulotning detallari yig'uvchilar tomonidan sifatli tarzda yig'iladi</p>
                <p>Mahsulotning sifati korxona sifat nazoratchisi orqali sinovdan o'tadi va yig'uv</p>
                <p>Mahsulot ishlab chiqarish jarayonini nazorat qilib turiladi hamda yaroqsiz chiqgan mahsulotlarni olib tashlanadi</p>
            </div>
        </div>
    </div>
  )
}

export default Protsess