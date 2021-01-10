import React from 'react'

function todo(props) {
    let style = {
        textDecoration: props.completed ? 'line-through' : ''
    }
    console.log(style);
    return (
        <div style={style} className='todo'>
            <input type="checkbox" onChange={props.onComplete} />
            {` ${props.statement}`}
            <button onClick={props.onDelete}>x</button>
        </div>
    )
}

export default todo

