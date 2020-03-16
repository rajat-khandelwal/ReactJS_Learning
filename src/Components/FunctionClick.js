import React from 'react'

function FunctionClick()  
{

    function ClickHandler(){
console.log("Button Cliked");

    }

    return (
        <div>
        <button onClick={ClickHandler}>Click</button>    
        </div>
    )
}

export default FunctionClick
