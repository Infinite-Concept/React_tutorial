import React, { useState } from 'react'

function Person2({count, Increase}) {

  
  return (
    <div>
      <h2>Count your step {count}</h2>
      <button onClick={Increase}>Take step</button>
    </div>
  )
}

export default Person2




{/* <Person1 props={(count, Increase) => <Person2 count={count} Increase={Increase} /> } /> */}