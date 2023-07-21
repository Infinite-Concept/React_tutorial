import React from 'react'
import Updatecomponent from './Updatecomponent'

function Hero2({count, Takestep}) {


  return (
    <div>
        <h2 onMouseOver={Takestep}>put your mouse over the text to count your step {count}</h2>
    </div>
  )
}

export default Updatecomponent(Hero2)

