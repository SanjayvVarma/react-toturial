import React, { useState } from 'react'
import data from "./data"
import './faq.css'

const Faq = () => {

    const [show, setShow] = useState(null)

    const handleClick = (idx) => {
        setShow((prevIdx) => (prevIdx === idx ? null : idx))
    }

    return (
        <div>
            {data.map((faq, idx) => (
                <div key={idx}>
                    <button className={` ${show === idx ? 'arrow' : ''}`} onClick={() => handleClick(idx)}>&gt;</button>
                    <div>{faq.question}</div>
                    <div>
                        {show === idx && <div>{faq.answer}</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Faq;