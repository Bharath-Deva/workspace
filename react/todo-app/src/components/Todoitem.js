import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getstyle = () => {
        return {
            backgroundColor: 'rgb(206, 206, 2)',
            borderBottom: '1px solid black',
            margin: '0 10px',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getstyle()}>
                <p>
                    <input onChange={this.props.taskCompleted} type="checkbox" />
                    {' '}{this.props.todo.title}
                    {' '}<button onClick={this.props.taskDelete} >Delete</button>
                </p>
            </div >
        )
    }
}

//ProTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
