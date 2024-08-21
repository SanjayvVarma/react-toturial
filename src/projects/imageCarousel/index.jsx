// import React, { useEffect, useState } from 'react'

// const ImageCarousel = () => {

//     const [images, setImages] = useState([])
//     const [idx, setIdx] = useState(0)

//     const fetchImage = async () => {
//         try {
//             const res = await fetch('https://www.reddit.com/r/aww/top/.json?t=all')

//             const data = await res.json();
//             const filteredPosts = data.data.children.filter((item) =>
//                 item.data.url_overridden_by_dest.includes('.jpg')
//             ).map((item) => (
//                 item.data.url_overridden_by_dest
//             ))
//             setImages(filteredPosts)
//             console.log(filteredPosts);
//         } catch (error) {
//             console.log("Find a error while fetch image", error);

//         }

//     }

//     useEffect(() => {

//         fetchImage()

//     }, [])

//     useEffect(() => {
//         const tId = setInterval(() => {
//             handleClick('right')
//         }, 3000);
//         return () => {
//             clearInterval(tId)
//         }
//     }, [idx])

//     const handleClick = (dir) => {
//         if (dir === 'lift') {
//             if (idx === 0) {
//                 setIdx(images.length - 1)
//             } else {
//                 setIdx((idx) => idx - 1)
//             }
//         } else if (dir === 'right') {
//             if (images.length - 1 === idx) {
//                 setIdx(0)
//             } else {
//                 setIdx((idx) => idx + 1)
//             }
//         }
//     }

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <div>
//                 <button onClick={() => handleClick('left')}>{"<"}</button>
//             </div>
//             <img style={{ width: '500px', height: '500px' }} src={images[idx]} alt="" />
//             <div>
//                 <button onClick={() => handleClick('right')}>{">"}</button>
//             </div>
//         </div>
//     )
// }

// export default ImageCarousel;




// custom images


import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
    const images = [
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const tId = setInterval(() => {
            handleClick('right');
        }, 3000);
        return () => {
            clearInterval(tId);
        };
    }, [idx]);

    const handleClick = (dir) => {
        if (dir === 'left') {
            setIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
        } else if (dir === 'right') {
            setIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <button onClick={() => handleClick('left')}>{"<"}</button>
            </div>
            <img style={{ width: '500px', height: '500px' }} src={images[idx]} alt="" />
            <div>
                <button onClick={() => handleClick('right')}>{">"}</button>
            </div>
        </div>
    );
};

export default ImageCarousel;
