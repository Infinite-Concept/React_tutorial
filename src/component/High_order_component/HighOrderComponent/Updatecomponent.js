import React, { useState } from 'react'

function Updatecomponent(Originalcomponent) {
    function Newcomponent(){
        const [count, setCount] = useState(0)

        const Takestep = () => {
            setCount(count + 1)
        }
        return <Originalcomponent count={count} Takestep={Takestep} />
    }
     
    return Newcomponent
}

export default Updatecomponent