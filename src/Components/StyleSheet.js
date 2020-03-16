import React from 'react'
import './mystyle.css'
function StyleSheet(props) {

    const classname = props.primary ? 'primary' : '';

    return (
        <div>
            <h2 className={classname}>The ColorFull Heading</h2>
        </div>
    )
}

export default StyleSheet
