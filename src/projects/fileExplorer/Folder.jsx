import React, { useState } from 'react'

const Folder = ({ data, handleInsertNode }) => {

    const [expanded, setExpanded] = useState(false)
    const [createNewItem, setCreateNewItem] = useState(false)
    const [showInput, setShowInput] = useState(null)
    const [itemName, setItemName] = useState('')

    const handleCreateItem = (type) => {
        setShowInput(type)
    }

    const addNewItem = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(data.id, e.target.value, showInput === 'folder')
            setShowInput(null)
            setItemName('')
        }
    }

    return (
        <div>
            <div>
                {
                    data.isFolder ?
                        (
                            <div
                                onMouseOver={() => setCreateNewItem(true)}
                                onMouseLeave={() => setCreateNewItem(false)}
                                className='flex gap-8 hover:bg-gray-800 p-1'
                            >
                                <div>
                                    <button
                                        className='text-2xl'
                                        onClick={() => (setShowInput(null), setExpanded(!expanded))}
                                    >
                                        {expanded ? '📂' : '📁'} {data?.name}
                                    </button>
                                </div>
                                {
                                    createNewItem &&
                                    <div className='text-sm flex gap-2'>
                                        <button onClick={() => handleCreateItem('folder')}>📁</button>
                                        <button onClick={() => handleCreateItem('file')}>📄</button>
                                    </div>
                                }
                            </div>
                        ) : (
                            <div>{'📄'}{data?.name}</div>
                        )
                }
                <div>
                    {
                        showInput && (
                            <div className='pl-7'>
                                {
                                    showInput === 'folder' ? <span>📁</span> : <span>📄</span>
                                }
                                <input
                                    className='bg-slate-600 rounded h-6 text-xl m-1 p-3'
                                    onKeyDown={addNewItem}
                                    value={itemName}
                                    onChange={(e) => setItemName(e.target.value)}
                                    autoFocus
                                    type='text'
                                    placeholder={`New ${showInput || 'item'}`}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
            {
                data.isFolder && expanded &&
                data.nodes?.map((file, i) => (
                    <div key={i} className='pl-7 text-2xl pt-2'>
                        <Folder data={file} handleInsertNode={handleInsertNode} />
                    </div>
                ))
            }
        </div >
    )
}

export default Folder;
