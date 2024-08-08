import React, { useState } from 'react'

const UndoableCounter = () => {
    const minBtn = [-100, -10, -1]
    const pluBtn = [+100, +10, +1]

    const [value, setValue] = useState(0)
    const [history, setHistory] = useState([])
    const [redo, setRedo] = useState([])
    const maxCount = 5


    const mainHistory = (btn, prev, curr) => {
        const obj = { btn, prev, curr }

        const copyHistory = [...history]
        copyHistory.unshift(obj)
        setHistory(copyHistory)
    }

    const handleMin = (btn) => {
        mainHistory(btn, value, btn + value)
        setValue((prev) => prev + btn)
        setRedo([]);
    }

    const handleUndo = () => {
        if (history.length > 0 && redo.length < maxCount) {

            const copyHist = [...history]
            const removeItem = copyHist.shift()
            setHistory(copyHist)
            setValue(removeItem.prev)
            const redoList = [...redo]
            redoList.push(removeItem)
            setRedo(redoList)
        } else {
            alert('No more actions to undo or redo limit reached.');
        }
    }


    const handleRedo = () => {
        if (redo.length) {
            const copyRedoList = [...redo]
            const popValue = copyRedoList.pop()
            setRedo(copyRedoList)
            const { btn, prev, curr } = popValue;
            setValue(curr)
            mainHistory(btn, prev, curr)
        } else {
            alert('No more actions to redo.');
        }
    }

    return (
        <div>
            <h1>Undoable Counter</h1>
            <div>
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleRedo}>Redo</button>
            </div>
            <div>
                {
                    minBtn.map((btn, idx) => (
                        <button key={idx} onClick={() => handleMin(btn)}>{btn}</button>
                    ))
                }
                <h2>{value}</h2>
                {
                    pluBtn.map((btn, idx) => (
                        <button key={idx} onClick={() => handleMin(btn)}>{btn}</button>
                    ))
                }
            </div>
            <div>
                <p>History</p>
                {history.map((hist, idx) => (
                    <div key={idx}> Action = {hist.btn}, prevValue = {hist.prev}, currValue = {hist.curr}</div>
                ))}
            </div>
        </div>
    )
}

export default UndoableCounter;
