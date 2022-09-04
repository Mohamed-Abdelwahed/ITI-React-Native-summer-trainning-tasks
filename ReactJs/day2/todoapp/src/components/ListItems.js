import React, { Component } from 'react'
import './listItems.css'
export default class ListItems extends Component {
    
  render() {
    const {items,deletItem} = this.props;
    let lengthItem = items.length;
    const ListItems =lengthItem ?( items.map(item=>{
        return(
            <div key={item.id} className='header__list'>
                <div className='taskTitle taskAdded'>{item.task}</div>
                <div onClick={()=>deletItem(item.id)} className='taskAction deletAction'>Delete</div>
            </div>
        )
    })):(<p className='no-tasks'>No todos to show</p>)
    return (
       
      <div className='listItem-parent'>
         <div className='header__list'>
            <div className='taskTitle'>Task</div>
            <div className='taskAction'>Action</div>
         </div>
            {lengthItem >0 ?<div className='lengthTasks'>there are {lengthItem} tasks</div>:""}
            {ListItems}
      </div>
    )
  }
}
