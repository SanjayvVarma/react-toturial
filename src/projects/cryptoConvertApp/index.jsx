import React, { useEffect, useState } from 'react'

const CryptoConvert = () => {
  const arr = ['USD', 'EUR', 'GBP', 'CNY', 'JPY']
  const [currency, setCurrency] = useState(0)
  const [selected, setSelected] = useState('USD')
  const [value, setValue] = useState(0)
  const [diff, setDiff] = useState(0)
  const [up, setUp] = useState(Boolean)

  const fetchData = async () => {
    try {
      const url = `https://api.frontendeval.com/fake/crypto/${selected}`
      const data = await fetch(url)
      const res = await data.json()
      const resVal = res.value
      const val = (resVal * currency)
      const showVal = (val.toFixed(2))
      console.log(showVal);
      setValue(showVal)

      const prevVal = window.sessionStorage.getItem('prevValue')

      const diff = showVal - prevVal;

      setDiff(diff.toFixed(2))

      diff < 0 ? setUp(false) : setUp(true)

      window.sessionStorage.setItem('prevValue', showVal)

    } catch (error) {
      console.log("ERROR", error);

    }
  }

  useEffect(() => {
    let time = setInterval(() => {
      fetchData()
    }, 2000)
    return () => clearInterval(time)

  }, [selected, currency])

  return (
    <div className='flex flex-col justify-center items-center text-center bg-gray-900 text-white h-screen'>
      <h1 className='text-2xl p-7'>Crypto converter</h1>
      <div className='flex justify-center text-center'>
        <input
          className="bg-gray-200 border border-gray-600 text-gray-900 rounded block p-1.5 mx-2.5"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <select
          className='bg-gray-50 border border-gray-300 text-gray-900 rounded block p-1.5'
          id='opt'
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {
            arr.map((opt) => (
              <option
                key={opt}
                id='opt'
                value={opt}
              >
                {opt}
              </option>
            ))
          }
        </select>
      </div>
      <div className='flex justify-center text-center gap-10 p-8 text-xl'>
        <span>{value}</span>
        <span>WUC</span>
        <div className={`${up ? 'text-green-600' : 'text-red-600'}`}>
          <span>{up ? '↑  ' : '↓  '}</span>
          <span>{diff}</span>
        </div>
      </div>
    </div>
  )
}

export default CryptoConvert;