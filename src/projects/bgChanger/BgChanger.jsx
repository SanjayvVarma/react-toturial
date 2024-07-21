import React, { useState } from 'react'
import bgImage from "../../assets/myImage.png"

const BgChanger = () => {

    const [color, setColor] = useState("olive")
    const [photo, setPhoto] =useState("")

    return (
        <div className="w-full h-screen duration-200"
            style={{ backgroundColor: color, backgroundImage:  `url(${photo})`}}
        >
            <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
                <div className={`flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl ${color === "white" ? "bg-gray-700" : "bg-white"}`}>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700"
                        onClick={() =>{ setColor("red"); setPhoto("")}}
                    >
                        Red
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700"
                        onClick={() => {setColor("green"); setPhoto("")}}
                    >
                        Green
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700"
                        onClick={() => {setColor("blue"); setPhoto("")}}
                    >
                        Blue
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-indigo-700"
                        onClick={() => {setColor("indigo"); setPhoto("")}}
                    >
                        Indigo
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-700"
                        onClick={() => {setColor("orange"); setPhoto("")}}
                    >
                        Orange
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500"
                        onClick={() => {setColor("yellow"); setPhoto("")}}
                    >
                        Yellow
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-cyan-400"
                        onClick={() => {setColor("cyan"); setPhoto("")}}
                    >
                        Cyan
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-400"
                        onClick={() => {setColor("pink"); setPhoto("")}}
                    >
                        Pink
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-800"
                        onClick={() => {setColor("purple"); setPhoto("")}}
                    >
                        Purple
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black"
                        onClick={() => {setColor("black"); setPhoto("")}}
                    >
                        Black
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white"
                        onClick={() =>{ setColor("white"); setPhoto("")}}
                    >
                        White
                    </button>
                    <button
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-800"
                        onClick={() => setPhoto(bgImage)}
                    >
                        MyImage
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BgChanger;