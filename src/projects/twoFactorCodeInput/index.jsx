import React, { useEffect, useRef, useState } from 'react'
import './twoFactor.css'

const TwoFactor = () => {

    const arr = ['', '', '', '']
    const refs = arr.map(() => useRef(null));
    const [inputs, setInputs] = useState(arr)
    const [missing, setMissing] = useState(arr)

    const CODE = '0207'


    const handleSubmit = () => {
        const missed = inputs.map((item, i) => {
            if (item === '') {
                return i
            }

        }).filter((item) => (item || item === 0))

        setMissing(missed)

        if (missed.length) {
            return
        }

        const userInput = inputs.join('');

        const isMatch = userInput === CODE

        const msg = isMatch ? 'Code is valid' : 'Code is not valid'
        alert(msg)
    }

    useEffect(() => {
        refs[0].current.focus()
    }, [])

    const handleInput = (e, i) => {
        // let value = e.target.value
        // console.log(value, i);
        // if (!Number(value)) {
        //     return;
        // }

        // if (i < inputs.length - 1) {
        //     refs[i + 1].current.focus()
        // }

        // const copyInput = [...inputs]
        // copyInput[i] = value;
        // setInputs(copyInput)



        const { value } = e.target;
        if (!/^[0-9]$/.test(value) && value !== '') {
            return;
        }

        const newInputs = [...inputs];
        newInputs[i] = value;

        if (value !== '' && i < inputs.length - 1) {
            refs[i + 1].current.focus();
        }

        setInputs(newInputs);
    }

    const handleOnKey = (e, i) => {
        if (e.keyCode === 8) {
            const copyInp = [...inputs]
            copyInp[i] = ''
            setInputs(copyInp)

            if (i > 0) {
                refs[i - 1].current.focus()
            }
        }
    }

    const handlePaste = (e) => {
        const data = e.clipboardData.getData('text')
        if (!Number(data) || data.length !== inputs.length) return;

        const pasteCode = data.split('')
        setInputs(pasteCode)
        refs[inputs.length - 1].current.focus();
    }

    return (
        <div>
            <h1>Two-factor code input</h1>
            <div>
                {
                    arr.map((item, i) => (
                        <input
                            key={i}
                            ref={refs[i]}
                            type="text"
                            maxLength='1'
                            value={inputs[i]}
                            onChange={(e) => handleInput(e, i)}
                            onKeyDown={(e) => handleOnKey(e, i)}
                            onPaste={handlePaste}
                            className={missing.includes(i) ? 'errors' : ''}
                        />
                    ))
                }
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default TwoFactor;