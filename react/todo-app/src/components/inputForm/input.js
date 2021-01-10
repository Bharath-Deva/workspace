import React from 'react'

export default function Input(props) {
    let onSubmit = (event) => {
        event.preventDefault()
        props.onSubmitFunc(event.target.inputHandler.value)
        event.target.inputHandler.value = ''
    }
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input
                    type="text"
                    placeholder='Enter your todo' name='inputHandler' />
                <input type="submit" value="submit" />

            </form>
        </div>
    )
}
