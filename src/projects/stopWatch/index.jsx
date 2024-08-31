import React, { useState, useEffect, useRef } from 'react';


const StopWatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);
    // const intervalRef = useRef(null);
    let tId;

    useEffect(() => {
        if (isActive) {
            tId = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(tId);
        }

        return () => clearInterval(tId);
    }, [isActive]);

    const handleStartStop = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    // const formatTime = (time) => {
    //     const minutes = Math.floor(time / 60000);
    //     const seconds = Math.floor((time % 60000) / 1000);
    //     const milliseconds = time % 1000;

    //     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    // };


    // for hour

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000));

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-64 h-64 p-5 text-center bg-gradient-to-br from-[#cacaca] to-[#f0f0f0] rounded-full shadow-[0_0_20px_#bebebe]">
                <h1 className='text-3xl font-bold text-purple-800 p-6'>STOPWATCH</h1>
                <div className="text-3xl font-bold text-[#b4161b]">
                    <h1>  {formatTime(time)}</h1>
                </div>
                <div className='flex gap-3 my-7'>
                    <button
                        className="h-10 px-2 font-bold text-white bg-gradient-to-br from-[#e81cff] to-[#40c9ff] rounded-lg border-none disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-[#e81cff80] disabled:to-[#40c9ff80] disabled:opacity-80"
                        disabled={isActive}
                        onClick={handleStartStop}
                    >
                        START
                    </button>
                    <button
                        className="h-10 px-2 font-bold text-white bg-gradient-to-br from-[#e81cff] to-[#40c9ff] rounded-lg border-none disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-[#e81cff80] disabled:to-[#40c9ff80] disabled:opacity-80"
                        disabled={!isActive}
                        onClick={handleStartStop}
                    >
                        STOP
                    </button>
                    <button
                        className="h-10 px-2 font-bold text-white bg-gradient-to-br from-[#e81cff] to-[#40c9ff] rounded-lg border-none disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-[#e81cff80] disabled:to-[#40c9ff80] disabled:opacity-80"
                        disabled={!isActive}
                        onClick={handleReset}
                    >
                        RESET
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StopWatch;
