import React, { useState } from 'react'
import Updatecomponent from './Updatecomponent'

function Hero1({count, Takestep}) {
    
  return (
    <div>
        <h2>count your step: you just take {count} step </h2>
        <button  onClick={Takestep} >count your step</button>
    </div>
  )
}

export default Updatecomponent(Hero1)