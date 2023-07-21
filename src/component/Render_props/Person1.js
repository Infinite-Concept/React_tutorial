import React, { useState } from 'react'

function Person1 ({count, Increase}) {

    return(
        <div>

            <h2>Count your steps {count}</h2>
            <button onClick={Increase}>Take step</button>
        </div>
    )
}

export default Person1