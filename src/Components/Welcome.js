import React, { Component} from 'react'

class Welcome extends Component {

  

render(){
    const { name } = this.props //class destructure
return (

    <div>
    <h1>Welcome {  name}</h1>
    {this.props.children}
</div>


)    
    
  

}



}


export default Welcome