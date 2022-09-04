import React, { Component } from 'react'
import './addItem.css'
export default class AddItems extends Component {
    state = {
        task:'',
    }

    handleChange = (e)=>{
      
         this.setState({
            [e.target.id] : e.target.value
        })
      
       
     }

handleSubmit = (e)=>{
e.preventDefault();
// console.log(this.state);
this.props.addTask(this.state)
this.setState({
    task:''
})
}
  render() {
    return (
      <div className='addItem__style'>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Type your tasks ..." id="task" onChange={this.handleChange} value={this.state.task} />
            <input type="submit" value="Add Task" />
        </form>
      </div>
    )
  }
}
