import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems';
import AddItems from './components/AddItems';
import react ,{ Component } from 'react';

class App extends Component{
  state={
    items:[
      {id:1,task:'write homework'},
      {id:2,task:'make something good'},
      {id:3,task:'do sports'},
    ]
  }

  deletItem = (id)=>{
          // console.log(id);
          ///////////////////////////////////
          // let items = this.state.items;
          // let index = items.findIndex(item=>item.id === id)
          // items.splice(index,1);
          // this.setState({items})
          ///////////////////////////////////////////
          let items = this.state.items.filter(item=>{
            return item.id !== id
          })
          this.setState({items})
  }

  addTask = (task)=>{
    task.id = Date.now()
        let tasks = this.state.items;
        tasks.push(task);
        this.setState({items:tasks})
  }
  render(){

      return (
        <div className="App">
        <AddItems addTask={this.addTask}/>
        <ListItems items = {this.state.items} deletItem={this.deletItem}/>
      </div>
    );
   }
}

export default App;
