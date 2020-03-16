import React from 'react'

const Greets = (props) => 
{

    const { name, heroName } = props //funtional destructure

return <h1>Greets {name} a.k.a {heroName}</h1>

}
 
export  default Greets;