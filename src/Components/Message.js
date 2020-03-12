import React, { Component} from 'react'

class Message extends Component {

constructor(){
super();
this.state = {

    message:'This is the stateMessage'

};

    }

chnageMessage(){

this.setState({

    message:'Thankyou for Subscribing'

})

}


render(){

return (

    <div>
    <h1>Welcome {  this.state.message}</h1>
    <button onClick={()=>{ this.chnageMessage() }}>Subscribe</button>
</div>
)    
    
}
}

export default Message 