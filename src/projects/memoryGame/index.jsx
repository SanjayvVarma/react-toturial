import React, { useEffect, useState } from 'react'
import './memoryGame.css'

const getNums = () => {
    let list = []
    for (let i = 1; i <= 8; i++) {
        list.push(i)
        list.push(i)
    }
    return list
}


const MemoryGame = () => {
    const [stag, setStag] = useState('init')
    const [nums, setNums] = useState(getNums())
    const [open, setOpen] = useState([])
    const [solve, setSolve] = useState([])

    const randomNums = () => {
        const copyNums = [...nums]
        const ranNums = copyNums.sort(() => Math.random() - 0.5)
        return ranNums;

    }
    const handleStag = () => {
        setStag('start')
        setNums(randomNums())
        setSolve([])
    }

    const handleClick = (num, idx) => {
        if (open.length === 2) {
            return
        }
        setOpen((prev) => [...prev, idx])
    }

    const getClass = (num, idx) => {
        if (solve.includes(num)) {
            return 'remove'
        } else if (open.includes(idx)) {
            return 'show'
        } else {
            return 'hide'
        }


    }

    useEffect(() => {
        if (open.length === 2) {
            setTimeout(() => {
                const id1 = open[0]
                const id2 = open[1]
                if (nums[id1] === nums[id2]) {
                    setSolve(prev => [...prev, nums[id1]])
                }
                setOpen([])
            }, 1000)
        }
    }, [open])

    useEffect(() => {
        if (solve.length === 8) {
            setStag('win')
        }

    }, [solve])

    return (
        <div className='container'>
            <h2>Memory Game</h2>
            {
                stag === 'init' &&
                <div>
                    <button onClick={handleStag}>Play Game</button>
                </div>
            }
            {
                stag === 'start' &&
                <div className='game'>
                    <div className='cards'>
                        {
                            nums.map((num, i) => (
                                <div
                                    key={i}
                                    className={`card ${getClass(num, i)}`}
                                    onClick={() => handleClick(num, i)}
                                >
                                    {num}
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            {
                stag === 'win' &&
                <div>
                    <h4>You won the game</h4>
                    <button onClick={handleStag}>Play Again</button>
                </div>
            }
        </div>
    )
}

export default MemoryGame;