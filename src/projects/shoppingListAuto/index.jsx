import React, { useEffect, useState } from 'react'
import './shoplist.css'

const ShoppingList = () => {
    const [search, setSearch] = useState("")
    const [suggList, setSuggList] = useState([])
    const [shopList, setShopList] = useState([])

    const fetchItem = async () => {
        await fetch(`https://api.frontendeval.com/fake/food/${search}`)
            .then((res) => res.json())
            .then((data) => setSuggList(data))

    }

    useEffect(() => {
        if (search.length >= 2) {
            fetchItem()
        }

    }, [search])

    const handleSuggList = (item) => {
        if (item) {
            const newList = { id: Date.now(), name: item, isDone: false }
            const newItem = [...shopList, newList]
            setShopList(newItem)
        }
        setSearch('')
    }


    const handleR = (id) => {
        const newList = shopList.map((item) =>
            item.id === id ? { ...item, isDone: !item.isDone } : item
        )
        setShopList(newList)
    }

    const handleRemove = (id) => {
        const removeItem = shopList.filter((item) => (
            item.id !== id
        ))
        setShopList(removeItem)
    }

    return (
        <div>
            <h1>My Shopping List</h1>
            <div>
                <input placeholder='enter.....' type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
            </div>
            {
                search.length >= 2 ? (
                    <div>
                        {
                            suggList.map((item) => (
                                <div onClick={() => handleSuggList(item)} key={item}>
                                    {item}
                                </div>
                            ))

                        }
                    </div>
                ) : null

            }

            < div >
                {
                    shopList.map((item) => (
                        <div key={item.id}>
                            <button
                                onClick={() => handleR(item.id)}
                            >✓</button>
                            <div className={item.isDone ? 'like' : ''}> {item.name}</div>
                            <button onClick={() => handleRemove(item.id)}>X</button>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default ShoppingList;