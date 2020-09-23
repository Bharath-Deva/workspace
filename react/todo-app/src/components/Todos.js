import React, { Component } from 'react';
import Todoitem from './Todoitem'
import PropTypes from 'prop-types';

class Todos extends Component {
    state = {}

    render() {
        return (
            <div style={{ margin: '10px' }} className="Todos">
                {
                    this.props.todos.map((todo) => {
                        return (
                            <Todoitem
                                key={todo.id}
                                todo={todo}
                                taskCompleted={this.props.taskCompleted.bind(this, todo.id)}
                                taskDelete={this.props.taskDelete.bind(this, todo.id)} />)
                    })
                }
            </div>
        );
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;