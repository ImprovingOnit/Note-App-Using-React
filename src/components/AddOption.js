import React from 'react'


export default class AddOption extends React.Component { 

    state = {
        error : undefined
    }

    onFormSubmit = (e) => {
        e.preventDefault ()
        const value = e.target.elements.task.value.trim()
        const error = this.props.onFormSubmitAddOption(value)
        e.target.elements.task.value = ''
        this.setState({ error })
    }

    render () {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.onFormSubmit}>
                    <input className="add-option__input" type="text" placeholder="Add some task" name="task"/>
                    <button className="button" type="submit" >Add Task</button>
                </form>
            </div>
        )
    }
}