import React, { useEffect, useState } from 'react'

const MortgageCalculator = () => {
    const [principal, setPrincipal] = useState(0)
    const [rate, setRate] = useState(0)
    const [year, setYear] = useState(0)
    const [emi, setEmi] = useState(0)

    // P(r(1+r)^n/((1+r)^n)-1))

    useEffect(() => {
        if (principal && rate && year) {
            const rateCal = rate / 12 / 100;
            // const powCal = Math.pow(1 + rate, year * 12)
            const numberOfPayments = year * 12;
            const amount = Math.floor((principal * rateCal * Math.pow(1 + rateCal, numberOfPayments)) / (Math.pow(1 + rateCal, numberOfPayments) - 1));
            
            setEmi(amount)

        }
    }, [principal, rate, year])
    return (
        <div>
            <h1>Mortgage calculator</h1>
            <div>
                <p>Principal : </p>
                <input type="text" onChange={(e) => setPrincipal(parseInt(e.target.value))}  />
                <p>Interest : </p>
                <input type="text" onChange={(e) => setRate(parseInt(e.target.value))}  />
                <p>year :</p>
                <input type="text" onChange={(e) => setYear(parseInt(e.target.value))} />
            </div>
            <div>
                <p>EMI is : {emi}</p>
            </div>
        </div>
    )
}

export default MortgageCalculator