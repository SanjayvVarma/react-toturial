import React, { useState } from 'react'
import './star.css'

const StarRating = () => {
    const arr = [1, 2, 3, 4, 5]

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0) 
    
    return (
        <div className='container'>
            <h1>Star Ratings</h1>
            <div>
                {arr.map((num) => (
                    <button
                        key={num}
                        onClick={() => setRating(num)}
                        onMouseOver={() => setHover(num)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className={`star ${num <= (hover || rating) ? 'on' : 'off'}`}>&#9733;</span>
                    </button>
                ))}
            </div>
        </div>
    )
}


export default StarRating;
