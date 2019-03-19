import React from 'react'

import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'

export default class NoteApp extends React.Component {

    constructor (props) {
        super(props) 
        this.onButtonClickDeleteAll = this.onButtonClickDeleteAll.bind(this)
        this.onButtonClickPick = this.onButtonClickPick.bind(this)
        this.onFormSubmitAddOption = this.onFormSubmitAddOption.bind(this)
        this.onButtonClickDeleteTask = this.onButtonClickDeleteTask.bind(this)
        this.state = { options: [] }
    }

    componentDidMount () {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if (options) {
            this.setState({ options })
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length < this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        } else if (prevState.options.length > this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    onButtonClickDeleteAll () {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    onButtonClickDeleteTask (option) {
        this.setState(prevState => {
            return { options: prevState.options.filter(opt => {
                return opt !== option
            })}
        })
    }

    onButtonClickPick () {
        const random = Math.floor((Math.random() * this.state.options.length)) 
        console.log(this.state.options[random])
    }

    onFormSubmitAddOption (option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This task already exists'
        }
        this.setState(prevState => {
            return { options: prevState.options.concat(option) }
        })
    }

    render () {
        const title = "Welcome to Note App"
        const subTitle = "Easier Way to Manage your life"
        return (
        <div>
            <Header title={title} subTitle={subTitle}/>
            <Action hasOptions={this.state.options.length > 0} onButtonClickPick={this.onButtonClickPick}/>
            <Options options={this.state.options} 
                        onButtonClickDeleteAll={this.onButtonClickDeleteAll}
                            onButtonClickDeleteTask={this.onButtonClickDeleteTask}
                                />
            <AddOption onFormSubmitAddOption={this.onFormSubmitAddOption}/>
        </div>
        )
    }
}
