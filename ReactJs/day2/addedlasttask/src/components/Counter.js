import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Counter extends Component {
    state={
        counter:0 
    }

    increaseCounter = ()=>{
        this.setState(this.state,()=>{
            return this.state.counter++
        }
        )
         
    }

    decreaseCounter = ()=>{
        this.setState(this.state,()=>{
            return this.state.counter !== 0 ? this.state.counter-- : alert("Can not decrease les zero")
        }
         
        )
      }
  render() {
    const {counter} = this.state
    return (
      <div className='container-fluid p-3 bg-danger text-light my-5'>

            <p>{counter}</p>
            <Button variant="primary" onClick={this.increaseCounter}>Increase Counter</Button>
            <Button variant="warning text-light mx-4" onClick={this.decreaseCounter}>Decrease Counter</Button>
      </div>
    )
  }
}
