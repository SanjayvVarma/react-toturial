import React, { useEffect, useState } from 'react'
import './progressBar.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress((p) => p + 1)
            }
        }, 100)
        return () => {
            clearInterval(timer)
        }
    }, [progress])

    return (
        <div className="container">
            <h1>Progress Bar</h1>
            <div className='progress-bar'>
                <div
                    style={{
                        width: `${progress}%`,
                        backgroundColor: progress < 50 ? 'lightgreen' : 'lightblue',
                        height: 30,
                        borderRadius: 20,
                        color: 'white'
                    }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '21%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: progress < 50 ? 'black' : 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        {progress}%
                    </div>
                </div>
            </div>
            {progress < 100 ? <h3>Loading.....</h3> : <h3>Complete!</h3>}
        </div>
    );
};


export default ProgressBar