import React, { Component } from 'react'
import style from './App.css';
import Persons from './Components/Persons/Persons'

export default class App extends Component {
  state = {
    persons: [
      {
        id: 'sdfsdf',
        name: 'mani',
        age: '24'
      },
      {
        id: 'sdfsdd',
        name: 'max',
        age: '22'
      },
      {
        id: 'sdfsdw',
        name: 'superman',
        age: '26'
      }
    ],

    showPersons: true
  }


  inputNameChange = (event) => {
    const name = event.target.value
    const tempPerson = this.state.persons.map((person) => {
      if (event.target.id === person.id) {
        person.name = name
      }
      return person
    })
    this.setState({ persons: tempPerson })
  }

  togglePersons = () => {
    const prevValue = this.state.showPersons
    this.setState({ showPersons: !prevValue })

  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} nameChange={this.inputNameChange} />
      )
    }

    return (
      <div className="App">
        <h1>Persons</h1>
        <button onClick={this.togglePersons}>Toggle</button>
        {persons}
      </div>
    )
  }
}
