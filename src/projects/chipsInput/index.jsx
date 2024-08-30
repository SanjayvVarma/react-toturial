import React, { useEffect, useState } from 'react'

const ChipsInput = () => {

    const [text, setText] = useState('')
    const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() !== '') {
            setList((prev) => [text, ...prev])
            setText(' ')
        }
    }


    const handleClick = (idx) => {
        setList((prevlist) => prevlist.filter((id) => id !== idx))
    }

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem("list"))
        if (savedList && savedList.length > 0) {
            setList(savedList)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list])

    return (
        <div className='flex flex-col justify-center items-center m-8'>
            <h1 className='text-2xl py-6'>Chips Input</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    className='w-full border-gray-700 border p-2 '
                        type="text"
                        value={text}
                        placeholder='Type & hit enter'
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>
            </div>
            <div>
                {
                    list.map((itm, idx) => (
                        <div className='flex gap-6' key={idx}>
                            <span>{itm}</span>
                            <span onClick={() => handleClick(itm)}>X</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ChipsInput;