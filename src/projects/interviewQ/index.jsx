import React, { useState } from 'react'

const InterviewQ = () => {

    const [value, setValue] = useState(0);
    // const [multValue, setMultValue] = useState(1);

    let multValue = value * 5;

    const multiplyByFive = () => {
        // setMultValue(value*5)
        setValue(value + 1)
    }

    return (
        <div>
            <h1>Main Value: {value}</h1>

            <button onClick={multiplyByFive}>Click to multiply 5</button>

            <h2>Multiplied value: {multValue}</h2>
        </div>
    )
}

export default InterviewQ;