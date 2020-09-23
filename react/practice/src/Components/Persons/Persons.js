import React from 'react'
import Person from './Person/Person'

const Persons = (props) => {
    return (
        <div className='Persons'>
            {props.persons.map((person) => {
                return (
                    <Person key={person.id} person={person} nameChange={props.nameChange} />
                )
            })}
        </div>
    )
}

export default Persons;
