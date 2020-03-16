import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    static propTypes = {

    }
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName:'Parent'
        }

        this.ParentClick = this.ParentClick.bind(this)
    }
    

    ParentClick(chieldname){
        console.log(this);
alert(`this is ${this.state.ParentName} and child name ${chieldname}`);

    }

    render() {
        return (
            <div>
                <ChildComponent Clickhandler={ this.ParentClick }/>
            </div>
        )
    }
}

export default ParentComponent
