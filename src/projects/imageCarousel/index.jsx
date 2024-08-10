import React, { useEffect, useState } from 'react'

const ImageCarousel = () => {

    const [images, setImages] = useState([])
    const [idx, setIdx] = useState(0)

    const fetchImage = async () => {
        try {
            const res = await fetch('https://www.reddit.com/r/aww/top/.json?t=all')

            const data = await res.json();
            const filteredPosts = data.data.children.filter((item) =>
                item.data.url_overridden_by_dest.includes('.jpg')
            ).map((item) => (
                item.data.url_overridden_by_dest
            ))
            setImages(filteredPosts)
            console.log(filteredPosts);
        } catch (error) {
            console.log("Find a error while fetch image",error);

        }

    }

    useEffect(() => {

        fetchImage()

    }, [])

    useEffect(() => {
        const tId = setInterval(() => {
            handleClick('right')
        }, 3000);
        return () => {
            clearInterval(tId)
        }
    }, [idx])

    const handleClick = (dir) => {
        if (dir === 'lift') {
            if (idx === 0) {
                setIdx(images.length - 1)
            } else {
                setIdx((idx) => idx - 1)
            }
        } else if (dir === 'right') {
            if (images.length - 1 === idx) {
                setIdx(0)
            } else {
                setIdx((idx) => idx + 1)
            }
        }
    }

    return (
        <div>
            <button onClick={() => handleClick('left')}>{"<"}</button>
            <img src={images[idx]} alt="" />
            <button onClick={() => handleClick('right')}
            >{">"}</button>
        </div>
    )
}

export default ImageCarousel;