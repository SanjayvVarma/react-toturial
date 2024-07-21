import React, { useState } from 'react'

let Counter = () => {

    let [counter, setCounter] = useState(0)
    let add = () => {
        // console.log("clicked");
        // counter += 1
        // console.log(counter);

        // setCounter(counter += 1);
        // if (counter > 21) {
        //     setCounter(0)
        // }

        setCounter((preCounter)=> preCounter+1)
        setCounter((preCounter)=> preCounter+1)
        setCounter((preCounter)=> preCounter+1)
        setCounter((preCounter)=> preCounter+1)
        setCounter((preCounter)=> preCounter+1)
    }

    let remove = () => {
        // console.log("clicked");
        // counter -= 1
        // console.log(counter);
        setCounter((prevCounter) => {
            const newCounter = prevCounter - 1;
            return newCounter < 0 ? 0 : newCounter;
        });
    }

    return (
        <>
            <div className="flex flex-col items-center p-4">
                <h1 className="mb-4 text-2xl"> Counter Project  </h1>
                <div className="mb-4 text-2xl">Counter: {counter}</div>
                <div className="flex space-x-4">
                    <button
                        onClick={add}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add +
                    </button>
                    <button
                        onClick={remove}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Remove -
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter;