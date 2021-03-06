import { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import './Contact.css';

const Contact = () => {

    const { t } = useTranslation();
    const [opencontact, setOpencontact] = useState(false);


    const contactInput1 = useRef();
    const contactInput2 = useRef();
    const message = useRef()

    const sendContentForm = (e) => {
        e.preventDefault()
    }

    const sendContent = (e) => {

        if (e.target.classList.contains("child")) {
            return;
        }

        setTimeout(() => {
            if (!contactInput1.current.value.trim().length ||
                !contactInput1.current.value.trim().toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) ||
                !contactInput2.current.value.trim().length 
                ||
                !message.current.value.trim().length)
                 {
                return;
            }

            setOpencontact(true)
        }, 1000)

        setTimeout(()=> {
            setOpencontact(false)
            if (contactInput1.current.value.trim().length &&
                contactInput1.current.value.trim().toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) &&
                contactInput2.current.value.trim().length 
                &&
                message.current.value.trim().length)
                 {

                     contactInput1.current.value = ""
                     contactInput2.current.value = ""
                     message.current.value = ""
                 }
        } ,5000) 
    }

    useEffect(() => {
        const body = document.body
        if (opencontact) {
            body.style.overflow = "hidden"
        } else {
            body.style.overflow = "visible"
        }
    }, [opencontact])

    return (
        <div className='contact' id='contact'>
            <form onSubmit={sendContentForm}>
                <h1>{t("contact_h1")}</h1>
                <div className="row">
                    <input ref={contactInput1} type="email" placeholder='E-mail' name='number' required />
                    <input ref={contactInput2} type="text" placeholder={t("contact_input")} name='name' className='clear' />
                </div>
                <textarea ref={message} name="comment" id="" cols="30" rows="10" placeholder={t("contact_placeholder")}></textarea>
                <button onClick={sendContent}>{t("contact_btn")}</button>
            </form>

            <div className={opencontact ? "contactOpen active" : "contactOpen"} onClick={()=> setOpencontact(false)}>
                <div className="contactOpen_wrapper child">
                    <img className='child' src="https://therepublicoftoys.uz/img/home/check.png" alt="" />
                    <h1 className='child'>
                        {t("contactOpen")}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Contact;