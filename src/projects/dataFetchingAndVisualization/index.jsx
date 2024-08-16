import React, { useEffect, useState } from 'react'
import './barchart.css'

const Barchart = () => {

    const [data, setData] = useState({});
    const url = "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";

    const fetchData = async () => {
        await fetch(url)
            .then((res) => res.text())
            .then((data) => {
                let map = {};
                const arr = data.trim().split("\n");
                arr.forEach((n) => (map[n] = (map[n] || 0) + 1));
                setData(map);
                console.log(map);

            })
            .catch((e) => console.log("Data fetch error: ", e));
    }

    useEffect(() => {
        fetchData()
    }, [url]);


    return (
        <div className="container">
            <div
                style={{
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                }}
            >
                <div className="chart-y">
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                </div>
                <div className="chart">
                    {Object.values(data).map((n, i) => (
                        <span key={i} style={{ height: n * 10 }}>{n}</span>
                    ))}
                </div>
            </div>
            <div className="chart-x">
                {Object.keys(data).map((key, i) => (
                    <span key={i}>{key}</span>
                ))}
            </div>
        </div>
    );
}

export default Barchart;