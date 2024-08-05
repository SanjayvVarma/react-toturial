import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
    const [start, setStart] = useState(true)
    const [pause, setPause] = useState(true)
    const [timerId, setTimerId] = useState(0)
    const [hh, setHh] = useState(0)
    const [mm, setMm] = useState(0)
    const [ss, setSs] = useState(0)

    const handlePause = () => {
        setPause(false)
        clearInterval(timerId)
    }

    const handleResume = () => {
        setPause(true)
        runTimer(ss, mm, hh)
    }

    const handleStartTimer = () => {
        if (hh === 0 && mm === 0 && ss <= 0) {
            alert("please input")
            return;
        } else {
            setStart(false)
        }
    }
    const handleReset = () => {
        setStart(true)
        setHh(0)
        setMm(0)
        setSs(0)
    }

    const handleInput = (e) => {
        const value = parseInt(e.target.value)
        const id = e.target.id;
        if (id === "hour") {
            setHh(value)
        } else if (id === "minut") {
            setMm(value)
        } else {
            setSs(value)
        }
    }

    const runTimer = (sec, min, hr, tId) => {
        if (sec > 0) {
            setSs((s) => s - 1)
        } else if (sec === 0 && min > 0) {
            setMm((m) => m - 1)
            setSs(59)
        } else {
            setHh((h) => h - 1)
            setMm(59)
            setSs(59)
        }
        if (ss === 0 && mm === 0 && hh === 0) {
            setHh(0)
            setMm(0)
            setSs(0)
            clearInterval(tId)
            alert("time finished")
            handleReset()
        }
    }

    useEffect(() => {
        let tId;
        if (!start) {
            tId = setInterval(() => {
                runTimer(ss, mm, hh, tId)
            }, 1000);

            setTimerId(tId)
        }

        return () => {
            clearInterval(tId)
        }

    }, [start, hh, mm, ss])

    return (
        <div >
            <div>
                <h2>Count Down Timer</h2>
            </div>
            {start ? (
                <div>
                    <div>
                        <input id='hour' placeholder='HH' onChange={handleInput} />
                        <input id='minut' placeholder='MM' onChange={handleInput} />
                        <input id='second' placeholder='SS' onChange={handleInput} />
                    </div>
                    <div>
                        <button onClick={handleStartTimer}>Start</button>
                    </div>
                </div>
            ) : (<div>
                <div>
                    <h4>{hh < 10 ? `0${hh}` : hh}</h4>
                    <span>:</span>
                    <h4>{mm < 10 ? `0${mm}` : mm}</h4>
                    <span>:</span>
                    <h4>{ss < 10 ? `0${ss}` : ss}</h4>
                </div>
                <div>
                    <div>
                        {pause ? (<button onClick={handlePause}>Pause</button>) : (<button onClick={handleResume}>Resume</button>)}
                    </div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>)}
        </div>
    )
}

export default CountdownTimer;