import React, { Component } from 'react'

 class form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                username:'',
                comment : '',
                Skill:'React'
        }


        this.FormSubmit = this.FormSubmit.bind(this)

    }
    CommentsChnage = event =>{

        this.setState({

            comment:event.target.value
            
                    })
        
    }

    SkillChange = event =>{
        this.setState({

            Skill:event.target.value
            
                    })
            
    }

    usernamechange = event=>{

        this.setState({

username:event.target.value

        })

    }


    FormSubmit=(event)=>{
console.log(event);
alert(`${this.state.username}`)

    }

    render() {
        return (
        <form onSubmit={this.FormSubmit}>
            <label>
                Username:
            </label>
            <input type="text" 
            value={this.state.username} 
            onChange={this.usernamechange} 
            />
<br/>
            <label>Comments</label>
<textarea value={this.state.comments} onChange={this.CommentsChnage}></textarea>
<br/>
        <label>Skills</label>
        <select value={this.state.Skill} onChange={this.SkillChange}>
            <option value='.Net'>.Net</option>
            <option value='Kuch Nahi'>Kuch Nahi</option>
            <option value='React'>React</option>
        </select>
        <button type='submit'>Submit</button>
        </form>
        )
    }
}

export default form
