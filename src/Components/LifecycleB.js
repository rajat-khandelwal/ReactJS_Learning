import React, { Component } from 'react'

 class lifecycleB extends Component {
     
    constructor(props) {
         super(props)
     
         this.state = {
              name:'Rajat'
         }
    console.log('constractor lifecycleB')
        }
    
    static getDerivedStateFromProps(props,state){

        console.log('lifecycleB getdrivedstatefromprops');
        return null;

    }

    componentDidMount(){
console.log('lifecycleB componentDidMount');

    }

    render() {
        console.log('lifecycle render');

        return (
            <div>
                lifecycleB 
            </div>
        )
    }
}

export default lifecycleB
