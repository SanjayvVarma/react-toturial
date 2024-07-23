import React, { useCallback, useEffect, useRef, useState } from 'react'

const PassGenerator = () => {

    const passImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyPRDRLzw5lbXyZr1g_eTxHGzlAOUz6njEg&s"

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [copy, setCopy] = useState("copy")
    const passRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numAllowed) {
            str += "0123456789"
        }

        if (charAllowed) {
            str += "!@#$%^&*-_+=[]{}~`"
        }

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char);
        }

        setPassword(pass)

    }, [length, numAllowed, charAllowed, setCharAllowed])

    const passCopyToClipboard = useCallback(() => {
        passRef.current?.select();
        passRef.current?.setSelectionRange(0, 50)
        window.navigator.clipboard.writeText(password);
        setCopy("copied")
        setTimeout(() => {
            setCopy("copy")
        }, 3500);
    }, [passwordGenerator])

    useEffect(() => {
        passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])

    return (
        <div className='w-full h-screen' style={{ backgroundImage:  `url(${passImage})`}}>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
                <h1 className='text-white text-center my-3'>Password generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        className="outline-none w-full py-1 px-3"
                        type="text"
                        placeholder='Password'
                        value={password}
                        readOnly
                        ref={passRef}
                    />
                    <button
                        className='outline-none bg-blue-800 hover:bg-blue-600 text-white px-3 py-0.5 shrink-0'
                        onClick={passCopyToClipboard}
                    >
                        {copy}
                    </button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={8}
                            max={30}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numAllowed}
                            onChange={() => setNumAllowed((prev) => !prev)}
                        />
                        <label>Number</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            onChange={() => setCharAllowed((prev) => !prev)}
                        />
                        <label>Char</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PassGenerator;