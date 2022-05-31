import { useEffect, useRef } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

import './ScrollArrow.css'

const ScrollArrow = () => {
    const scrollBox = useRef()

    useEffect(() => {
        window.addEventListener("scroll", e => {
            if (window.scrollY > 800) {
                console.log(scrollBox.current);
                scrollBox.current.classList.add("active")
            } else {
                scrollBox.current.classList.remove("active")
            }
        })
    }, [])

    return (
        <div className='scrollBar'>
            <a href='#' ref={scrollBox} className="scrollBox"><BsArrowUpShort className='arrow' /></a>
        </div>
    )
}

export default ScrollArrow