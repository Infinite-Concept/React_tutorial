import React, { useState } from "react";

function Renderprops ({props}){

    const [count, setCount] = useState(0)

    const Increase =()=> {
        setCount( count + 1)
    }

    return(
        <div>
            {props(count, Increase)}
        </div>
    )
}

export default Renderprops