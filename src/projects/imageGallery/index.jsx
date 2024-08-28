import React, { useState } from 'react'

const ImageGallery = () => {

    const arr = [
        'https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9',
        'https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc',
        'https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w',
        'https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc',
        'https://i.pinimg.com/736x/18/05/9e/18059e4da2911e58c4fd0e4b824c57a8.jpg',
        'https://static.vecteezy.com/system/resources/previews/025/188/627/non_2x/playful-puppy-and-kitten-sitting-outdoors-enjoying-nature-beauty-generated-by-ai-free-photo.jpg'
    ]

    const [show, setShow] = useState('')

    const handleClick = (url) => {
        setShow(url)
    }

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl mt-5'>Image Gallery</h1>
            <div className='flex mt-10 gap-5 cursor-pointer' >
                {
                    arr.map((itm, idx) => (
                        <div
                            onClick={() => handleClick(itm)}
                            key={idx}>
                            <img
                                className='w-48 h-40 rounded-lg'
                                src={itm}
                                alt="cat image"
                            />
                        </div>
                    ))
                }
            </div>
            <div>
                {show &&
                    <div className='text-center m-9'>
                        <p>Selected Image</p>
                        <img
                            className='p-5 rounded-xl w-90 h-80'
                            src={show}
                            alt="image"
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default ImageGallery;