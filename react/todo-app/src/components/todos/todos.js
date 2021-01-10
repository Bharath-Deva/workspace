import React from 'react'
import Todo from './todo/todo'

function todos(props) {
    return (
        <div className='todos'>
            {props.todos.map(el => (
                <Todo
                    key={el.id}
                    statement={el.statement}
                    completed={el.completed}
                    onComplete={props.onComplete.bind(this, el.id)}
                    onDelete={props.onDelete.bind(this, el.id)} />
            )
            )}
        </div>
    )
}

export default todos

