import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '=', '.', 'C'];
    const [value, setValue] = useState('');

    const handleClick = (e) => {
        const id = e.target.id;
        if (id === 'C') {
            setValue('');
        } else if (id === '=') {
            handleSubmit();
        } else {
            setValue((prev) => prev + id);
        }
    };

    const handleSubmit = () => {
        try {
            const ans = eval(value)
            setValue(ans);
        } catch (error) {
            alert('Invalid input');
            setValue('');
        }
    };

    return (
        <div className='main'>
            <h1>Calculator</h1>
            <div>
                <input
                    type="text"
                    value={value}
                    readOnly
                />
            </div>
            <div className='container' onClick={handleClick}>
                {
                    arr.map((item, idx) => (
                        <button
                            key={idx}
                            id={item}
                            className='btn'
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Calculator;
