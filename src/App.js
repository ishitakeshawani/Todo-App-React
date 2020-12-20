import React from "react";
import logo from "./todo.webp";
import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoVlaue){
    if(todoVlaue!==""){
      const newItem = {
        id: Date.now(),
        value: todoVlaue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
    }
  }

deleteItem(id){
  const list = [...this.state.list];
  const updatedlist = list.filter(item => item.id !== id);
  this.setState({
    list:updatedlist
  })
}

updateInput(input){
  this.setState({newItem:input});
}

  render(){
    return(
      <div>
        <title>My Todo App</title>
        <img src={logo} width="300" height="400" alt="some"  className="logo"/>
        <div className="container">
            Add Todo list....
            <br></br>
            <input type="text" 
            className="input-text"
            placeholder="write a todo"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
            />
            <button 
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            className="add-btn">
              Add todo
            </button>
            <div className="list">
                <ul>
                  {this.state.list.map(item => {
                    return(
                      <li key={item.id}>
                        <input
                        type="checkbox"
                        name="idDone"
                        checked={item.isDone}
                        
                        />
                        {item.value}
                        <button 
                        className="btn"
                        onClick={() => this.deleteItem(item.id)}
                        >Delete</button>
                      </li>
                    );
                  })}
                  <li>
                    <input type="checkbox" name="" id="" />
                    
                    <button className="button">Delete</button>
                  </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }

}

export default App;