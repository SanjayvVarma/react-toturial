import React, { useState } from 'react'

const AdvanceCounter = () => {

    const [counter, setCounter] = useState(0)
    const [delay, setDelay] = useState(1000)
    const [intcrementValue, setIntcrementValue] = useState(1)
    const [lowerLimit, setLowerLimit] = useState(-1000)
    const [upperLimit, setUpperLimit] = useState(1000)
    const [isAsyncRunning, setIsAsyncRunning] = useState(false)

    const handleSyncChange = (value) => {
        setCounter(
            (prev) => {
                const newCounter = (prev + value)
                if (newCounter > upperLimit) return upperLimit
                if (newCounter < lowerLimit) return lowerLimit
                return newCounter
            }
        )
    }

    const handleAsyncChange = (value) => {
        if (isAsyncRunning) return
        setIsAsyncRunning(true)
        setTimeout(() => {
            setCounter((prev) => {
                const newCounter = prev + value
                if (newCounter > upperLimit) return upperLimit
                if (newCounter < lowerLimit) return lowerLimit
                return newCounter
            });
            setIsAsyncRunning(false)
        }, delay);
    };

    return (
        <div className='bg-gray-800 h-screen text-white text-center pt-20'>
            <h1 className='text-3xl'>Advance Counter</h1>
            <div>
                <h2 className='text-2xl'>{counter}</h2>
                <div className='flex gap-4 justify-center mt-4'>
                    <button
                        className='bg-slate-600 px-6 rounded-full text-2xl disabled:bg-slate-400 disabled:cursor-not-allowed'
                        onClick={() => handleSyncChange(-intcrementValue)}
                        disabled={isAsyncRunning}
                    >
                        -
                    </button>
                    <button
                        className='bg-slate-600 px-6 rounded-full text-2xl disabled:bg-slate-400 disabled:cursor-not-allowed'
                        onClick={() => handleSyncChange(intcrementValue)}
                        disabled={isAsyncRunning}
                    >
                        +
                    </button>
                </div>
                <div className='flex gap-4 justify-center mt-4'>
                    <button
                        className='bg-slate-600 px-6 rounded text-2xl disabled:bg-slate-400 disabled:cursor-not-allowed'
                        onClick={() => handleAsyncChange(-intcrementValue)}
                        disabled={isAsyncRunning}
                    >
                        async -
                    </button>
                    <button
                        className='bg-slate-600 px-6 rounded text-2xl disabled:bg-slate-400 disabled:cursor-not-allowed'
                        onClick={() => handleAsyncChange(intcrementValue)}
                        disabled={isAsyncRunning}
                    >
                        async +
                    </button>
                </div>
                <div className='flex gap-4 justify-center mt-4'>
                    <label >Delay</label>
                    <input
                        type="range"
                        value={delay}
                        min='1000'
                        max='5000'
                        step='1000'
                        onChange={(e) => setDelay(Number(e.target.value))}
                    />
                    <span>{delay / 1000}s</span>
                </div>
                <div className='flex gap-4 justify-center mt-4'>
                    <span>Increment/Decrement :-</span>
                    <input
                        className='text-black text-center'
                        type="number"
                        min='0'
                        max='5000'
                        step='10'
                        value={intcrementValue}
                        onChange={(e) => setIntcrementValue(Number(e.target.value))}
                    />
                </div>
                <div className='ml-20'>
                    <div className='flex gap-4 justify-center mt-4'>
                        <span>Lower Limit :-</span>
                        <input
                            className='text-black text-center'
                            type="number"
                            min='-1'
                            max='-5000'
                            value={lowerLimit}
                            onChange={(e) => setLowerLimit(Number(e.target.value))}
                        />
                    </div>
                    <div className='flex gap-4 justify-center mt-4'>
                        <span>Upper Limit :-</span>
                        <input
                            className='text-black text-center'
                            type="number"
                            min='1'
                            max='5000'
                            value={upperLimit}
                            onChange={(e) => setUpperLimit(Number(e.target.value))}
                        />
                    </div>
                </div>
                <button
                    className='bg-slate-500 px-6 rounded text-2xl mt-4'
                    onClick={() => setCounter(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default AdvanceCounter;



// import React, { useState } from 'react';

// const AdvanceCounter = () => {
//     const [counter, setCounter] = useState(0);
//     const [delay, setDelay] = useState(1000);
//     const [incrementValue, setIncrementValue] = useState(1);
//     const [lowerLimit, setLowerLimit] = useState(-1000);
//     const [upperLimit, setUpperLimit] = useState(1000);
//     const [isAsyncRunning, setIsAsyncRunning] = useState(false);

//     const handleSyncChange = (value) => {
//         setCounter(prevCounter => {
//             const newCounter = prevCounter + value;
//             if (newCounter < lowerLimit) return lowerLimit;
//             if (newCounter > upperLimit) return upperLimit;
//             return newCounter;
//         });
//     };

//     const handleAsyncChange = async (value) => {
//         if (isAsyncRunning) return;
//         setIsAsyncRunning(true);
//         for (let i = 0; i < Math.abs(value); i++) {
//             setCounter(prevCounter => {
//                 const newCounter = prevCounter + (value > 0 ? 1 : -1);
//                 if (newCounter < lowerLimit) return lowerLimit;
//                 if (newCounter > upperLimit) return upperLimit;
//                 return newCounter;
//             });
//             await new Promise(resolve => setTimeout(resolve, delay));
//         }
//         setIsAsyncRunning(false);
//     };

//     const handleReset = () => {
//         setCounter(0);
//     };

//     return (
//         <div className='bg-gray-800 h-screen text-white text-center pt-20'>
//             <h1 className='text-3xl'>Advance Counter</h1>
//             <div>
//                 <h2 className='text-2xl'>{counter}</h2>
//                 <div className='flex gap-4 justify-center mt-4'>
//                     <button
//                         className='bg-slate-500 px-6 rounded text-2xl disabled:cursor-not-allowed disabled:bg-slate-300'
//                         onClick={() => handleSyncChange(-incrementValue)}
//                         disabled={isAsyncRunning}
//                     >
//                         -
//                     </button>
//                     <button
//                         className='bg-slate-500 px-6 rounded text-2xl disabled:cursor-not-allowed disabled:bg-slate-300'
//                         onClick={() => handleSyncChange(incrementValue)}
//                         disabled={isAsyncRunning}
//                     >
//                         +
//                     </button>
//                 </div>
//                 <div className='flex gap-4 justify-center mt-4'>
//                     <button
//                         className='bg-slate-500 px-6 rounded text-2xl disabled:cursor-not-allowed disabled:bg-slate-300'
//                         onClick={() => handleAsyncChange(-incrementValue)}
//                         disabled={isAsyncRunning}
//                     >
//                         async -
//                     </button>
//                     <button
//                         className='bg-slate-500 px-6 rounded text-2xl disabled:cursor-not-allowed disabled:bg-slate-300'
//                         onClick={() => handleAsyncChange(incrementValue)}
//                         disabled={isAsyncRunning}
//                     >
//                         async +
//                     </button>
//                 </div>
//                 <div className='flex gap-4 justify-center mt-4'>
//                     <label>Delay</label>
//                     <input
//                         className='text-black'
//                         type="range"
//                         min="1000"
//                         max="4000"
//                         step="1000"
//                         value={delay}
//                         onChange={(e) => setDelay(Number(e.target.value))}
//                         disabled={isAsyncRunning}
//                     />
//                     <span>{delay / 1000}s</span>
//                 </div>
//                 <div className='flex gap-4 justify-center mt-4'>
//                     <span>Increment/Decrement :-</span>
//                     <input
//                         className='text-black'
//                         type="number"
//                         min='0'
//                         max='100'
//                         step='10'
//                         value={incrementValue}
//                         onChange={(e) => setIncrementValue(Number(e.target.value))}
//                     />
//                 </div>
//                 <div className='ml-20'>
//                     <div className='flex gap-4 justify-center mt-4'>
//                         <span>Lower Limit :-</span>
//                         <input
//                             className='text-black'
//                             type="number"
//                             value={lowerLimit}
//                             min='-5000'
//                             max='-1'
//                             onChange={(e) => setLowerLimit(Number(e.target.value))}
//                         />
//                     </div>
//                     <div className='flex gap-4 justify-center mt-4'>
//                         <span>Upper Limit :-</span>
//                         <input
//                             className='text-black'
//                             type="number"
//                             min='5000'
//                             max='1'
//                             value={upperLimit}
//                             onChange={(e) => setUpperLimit(Number(e.target.value))}
//                         />
//                     </div>
//                 </div>
//                 <button
//                     className='bg-slate-500 px-6 rounded text-2xl mt-4'
//                     onClick={handleReset}
//                 >
//                     Reset
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AdvanceCounter;
