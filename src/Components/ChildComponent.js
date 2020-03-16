import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={ () => props.Clickhandler('child') }>Child click</button>
        </div>
    )
}

export default ChildComponent
