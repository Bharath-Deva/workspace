import React from 'react'

const Person = (props) => {
    return (
        <div className="Person">
            <p>My name is {props.person.name} and my age is {props.person.age}</p>
            <input onChange={props.nameChange} type="text" id={props.person.id} value={props.person.name} />

        </div>
    )
}
export default Person;