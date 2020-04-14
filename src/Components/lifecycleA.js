import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

 class lifecycleA extends Component {
     
    constructor(props) {
         super(props)
     
         this.state = {
              name:'Rajat'
         }
    console.log('constractor lifecycleA')
        }
    
    static getDerivedStateFromProps(props,state){

        console.log('LifeCycleA getdrivedstatefromprops');
        return null;

    }

    componentDidMount(){
console.log('LifeCycleA componentDidMount');

    }

    render() {
        console.log('lifecycle render');

        return (
            <div>
                LifeCycleA
                <LifecycleB/>
            </div>
        )
    }
}

export default lifecycleA
