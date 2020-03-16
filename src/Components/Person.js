import React from 'react'

function Person({index,name}) {
    return (
        
        <h2 key={index}>{name} {index}</h2>
        
    )
}

export default Person
