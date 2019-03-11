import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './todos.json';
console.log(todos);

class App extends Component {
  constructor(){
    super(); //hereda la funcionalidad del comp React
    this.state = {
      todos //cargo todos los datos de todos.json
//      title: "Aplicacion de tareas",
//      ntareas: 10
    }
  }




  render() {
    //cada que recorra una tarea creo una interfaz (card)
    const todos = this.state.todos.map((todo,i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
                <p><mark>{todo.responsible}</mark></p>
            </div>

            <div className="card-body">
              <p>{todo.description}</p>
            </div>
          </div>
        </div>
      )
    })



    return (
      <div className="App">
        <header className="App-header">

        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
          Task
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>

        <h1 className="display-1">Navegacion</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
