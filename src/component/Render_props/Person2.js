import React from "react"
import { useState } from "react"
const Person2 = ({count, Increase}) => {
    
    return(
        <>
        <h2>Count your steps:{count}</h2>
        <button onMouseMove={Increase}>click</button>
        </>
    )
}
export default Person2