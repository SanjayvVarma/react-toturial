import React, { useState } from 'react'
import '../starRatings/star.css'

const RatingComments = () => {
    const arr = [1, 2, 3, 4, 5]

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [comment, setComment] = useState(true)

    return (
        <div className='container'>
            <h1>Star Ratings</h1>
            {
                comment ? (
                    <div>
                        {arr.map((num) => (
                            <button
                                key={num}
                                onClick={() => { setRating(num), setComment(false) }}
                                onMouseOver={() => setHover(num)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className={`star ${num <= (hover || rating) ? 'on' : 'off'}`}>&#9733;</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div>
                        <textarea type='text'></textarea><br/>
                        <button>Submit</button>
                    </div>
                )
            }
        </div>
    )
}


export default RatingComments;