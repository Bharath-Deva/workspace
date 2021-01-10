import React, { Component } from 'react'
import './App.css';
import Input from '../components/inputForm/input'
import Todos from '../components/todos/todos'

export default class App extends Component {

  state = {
    todos: []
  }
  componentDidMount() {
    this.id = 0
  }

  todoInputHandler = (todoStatement) => {
    let todo = {
      id: this.id++,
      statement: todoStatement,
      completed: false
    }
    this.setState({
      ...this.state,
      todos: this.state.todos.concat(todo)
    })
  }

  onComplete = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(el => {
        if (id === el.id) {
          return {
            ...el,
            completed: !el.completed
          }
        }
        return el
      }
      )
    })
  }

  onDelete = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(el => {
        if (id === el.id) {
          return false
        }
        return true
      }
      )
    })
  }

  render() {

    return (
      <div className='App' >
        <Input
          changeHandler={this.inputHandler}
          onSubmitFunc={this.todoInputHandler} />
        <Todos
          todos={this.state.todos}
          onComplete={this.onComplete}
          onDelete={this.onDelete} />
      </div>
    )
  }
}
