import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Input from './components/Input.js'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Dinner',
        completed: false
      },
      {
        id: 2,
        title: 'linux',
        completed: false
      },
      {
        id: 3,
        title: 'eat',
        completed: false
      }
    ]
  }

  taskCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  taskDelete = (id) => {
    let todos = this.state.todos;
    console.log(todos.slice(0, id) + todos.slice(id, todos.length));
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (id === todo.id) {
          return false;
        }
        return true;
      })
    })
  }

  render() {
    return (
      <div className="app" >
        <Input />
        <Todos todos={this.state.todos} taskCompleted={this.taskCompleted} taskDelete={this.taskDelete} />
      </div>
    );
  }
}

export default App;
