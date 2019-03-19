import React from 'react'


export default class AddOption extends React.Component { 

    constructor (props) {
        super(props) 
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = { error: undefined }
    }

    onFormSubmit (e) {
        e.preventDefault ()
        const value = e.target.elements.task.value.trim()
        const error = this.props.onFormSubmitAddOption(value)
        e.target.elements.task.value = ''
        this.setState({ error })
    }

    render () {
        return (
            <div>
                <h3>Add Options</h3>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Add some task" name="task"/>
                    <button type="submit" >Add Task</button>
                </form>
            </div>
        )
    }
}