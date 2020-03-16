import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person';

function list(props) {

    const Namelist = ['Rajat','Roopal','shreya']
const namelistall = Namelist.map((name,index)=> <Person index={index} name=
{name} /> );
    return (
        <div>
           { namelistall }
        </div>
    )
}

list.propTypes = {

}

export default list

