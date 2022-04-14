import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <form>
                <h1>Savollaringiz bormi? Biz sizga qo'ng'iroq qilamiz</h1>
                <div className="row">
                    <input type="email" placeholder='E-mail' name='number' required />
                    <input type="text" placeholder='ismingiz' name='name' className='clear' />
                </div>
                <textarea name="comment" id="" cols="30" rows="10" placeholder='izoh'></textarea>
                <button>yuborish</button>
            </form>
        </div>
    )
}

export default Contact