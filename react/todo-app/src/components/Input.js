import React, { Component } from 'react'

export class Input extends Component {
    render() {
        return (
            <form className='Input' style={{ display: 'flex' }}>
                <input
                    type="text"
                    placeholder="Add ToDo ..."
                />
                <input type="submit" value="" />
            </form>
        )
    }
}

export default Input
