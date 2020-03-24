import React from "react";
import logo from "./lcologo.png";
import "./App.css";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
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
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    });
  }

  updateInput(input){
    this.setState({
      newItem: input
    });
  }

  render(){
    return (
      <div>
        <img src={logo} alt="LCO Logo" height="100" width="100" className="logo"></img>
        <h1 className="app-title">LCO ToDo App</h1>
        <div className="container">
          Add an Item....
          <br/>
          <input 
            type="text" 
            className="input-text" 
            placeholder="Write a Todo"
            required="true"
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)} 
            />
          <button 
            className="add-btn" 
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >Add Todo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name=""
                      checked={item.isDone}
                      onChange={() => {}}
                      />
                      {item.value}
                      <button 
                        className="btn"
                        onClick={() => this.deleteItem(item.id)}
                      >Delete</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;



/*  Inside return() of function app()
    1.Here JSX (= JavaScript + XML) is writtten which seems like HTML but its not.
    2.Every tag that is opened here needs to be closed  either its a component or self closing element 
    like (<br>).
    3.Its necassary to have one parent element here like div to contain all the elements.
    4. class keyword is not allowed here rather we use className.
    */