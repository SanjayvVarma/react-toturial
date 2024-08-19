import React, { useState } from 'react'
import { data } from './data'
import './transfer.css'

const TransferList = () => {
    const [leftList, setLeftList] = useState(data)
    const [rightList, setRightList] = useState([])

    const checkedItem = (list, id) => {
        return list.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
    }

    const handleClick = (id, dir) => {
        if (dir === 'LEFT') {
            setLeftList(checkedItem(leftList, id));
        } else if (dir === 'RIGHT') {
            setRightList(checkedItem(rightList, id));
        }
    }


    const resetChecked = (items) => (
        items.map(item => ({ ...item, checked: false }))
    )

    const handleTransfer = (dir) => {
        if (dir === 'LTR') {
            const checkedItems = leftList.filter(item => item.checked);
            const uncheckedItems = leftList.filter(item => !item.checked);
            setRightList([...rightList, ...resetChecked(checkedItems)]);
            setLeftList(uncheckedItems);
        } else if (dir === 'RTL') {
            const checkedItems = rightList.filter(item => item.checked);
            const uncheckedItems = rightList.filter(item => !item.checked);
            setLeftList([...leftList, ...resetChecked(checkedItems)]);
            setRightList(uncheckedItems);
        }

    }

    return (
        <>
            <h1 className='container'>Transfer List</h1>
            <div className='main-container'>

                <div className='card'>
                    {leftList.map(({ title, id, checked }) => (
                        <div
                            key={id}
                            className={`item ${checked && 'checked'}`}
                            onClick={() => handleClick(id, 'LEFT')}
                        >
                            {title}
                        </div>
                    ))}
                </div>
                <div className='btn'>
                    <button onClick={() => handleTransfer('LTR')}>LTR</button>
                    <button onClick={() => handleTransfer('RTL')}>RTL</button>
                </div>

                <div className='card'>
                    {rightList.map(({ title, id, checked }) => (
                        <div
                            key={id}
                            className={`item ${checked && 'checked'}`}
                            onClick={() => handleClick(id, 'RIGHT')}
                        >
                            {title}
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default TransferList;