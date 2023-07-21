import React, { useState, useMemo } from 'react'

function Hero() {
    const[number, setNumber] = useState('')
    const[count, setCount] = useState(0)

    const Mike =  Working(number)
   

  return (
    <div>
        <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />

        <h1>Output: {Mike}</h1>
        <h1>let count {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Hero

const Working = (number) => {
    console.log("Working with useMemo");
    return Math.pow(number, 2)
}