import React, { useEffect, useState } from 'react'

const TrafficLight = () => {
    const arr = ['green', 'yellow', 'red']
    const [activeLight, setActiveLight] = useState('red')
    const [duration, setDuration] = useState(5000)

    useEffect(() => {
        let timeId;
        if (duration <= 0) {
            clearInterval(timeId)
            if (activeLight === 'red') {
                setActiveLight('green')
                setDuration(5000)
            } else if (activeLight === 'green') {
                setActiveLight('yellow')
                setDuration(3000)
            } else {
                setActiveLight('red')
                setDuration(5000)
            }

        } else {
            timeId = setInterval(() => {
                setDuration((prev) => prev - 1000)
            }, 1000)
        }

        return () => {
            clearInterval(timeId)
        }

    }, [activeLight, duration])



    return (
        <div className='flex flex-col items-center justify-center gap-2.5'>
            <h1 className='mb-7 text-2xl'>traffic Light</h1>
            <div className='flex flex-col items-center justify-between gap-6 w-32 p-8 bg-black rounded-2xl'>
                {
                    arr.map((light) => (
                        <div
                            key={light}
                            className='bg-gray-500 rounded-full w-20 h-20 flex items-center justify-center'
                            style={{ background: activeLight === light ? light : '' }}
                        >
                            {activeLight === light && (
                                <p className='text-black font-bold text-xl'>{Math.ceil(duration / 1000)}s</p>
                            )}
                        </div>
                    ))
                }
            </div>
            <div className='mb-7 text-2xl'>
                <p >{duration / 1000} second</p>
            </div>
        </div>
    )
}

export default TrafficLight;