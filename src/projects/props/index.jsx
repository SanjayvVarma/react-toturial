import React from 'react'
import Card from './Card';


const Props = () => {

    const window = "https://5.imimg.com/data5/GM/FT/MY-60122989/lenovo-laptops.jpg"
    const linux = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEY8nCr4SfhYXroPBqrd64Bo-LSB3ha8UCw&s"
    const mac = "https://imageio.forbes.com/specials-images/imageserve/5fd00ea644cd62376ce2b6c1/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
    const myObj = {
        name: "Sanjay",
        age: 21,
    }

    const arr = [1, 2, 3, 4, 5]

    return (
        <div className='text-center'>
            <h1 className='text-2xl'>Props</h1>
            {/* <Card username="Sanjay" myObj={myObj} myArr={arr}/> */}
            <Card about="About Window" src={window} btnText="Go Window"/>
            <Card about="About Linux" src={linux} btnText="Go Linux"/>
            <Card about="About MacBook" src={mac} />
        </div>
    )
}

export default Props;