import React, { useState } from 'react'
import "./model.css"

const ModelOverlay = () => {
    const [show, setShow] = useState(false)
    const [isAccept, setIsAccept] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleOutSide = (e) => {
        if (e.target.className === "content-model") {

            setShow(false)
            setIsAccept(false)
        }

    }
    const handleAccept = () => {
        setShow(true)
        setIsAccept(true)
    }

    return (
        <div>
            {show ? (
                <div className='content-model' onClick={handleOutSide}>
                    {isAccept ? (<h1>Offer Accepted</h1>) :
                        (<div className='content-offer'>

                            <button onClick={handleClose}>X</button>
                            <p>click the button below to accept out amazing offer</p>
                            <button onClick={handleAccept}>Accept offer</button>

                        </div>)
                    }
                </div>
            ) :
                (
                    <div>
                        <button onClick={handleShow}>Show Offer</button>
                    </div>
                )
            }
        </div>
    )
}

export default ModelOverlay;