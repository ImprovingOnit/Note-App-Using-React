


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Note-App Defualt'
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.onButtonClickPick}
            >
            What Should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <h2>Options</h2>
            {props.options.length === 0 ? <p>Please insert task</p> : null}
            {props.options.map((option, index) => {
                return <Option key={index} option={option} onButtonClickDeleteTask={props.onButtonClickDeleteTask}/>
            })}
            <button onClick={props.onButtonClickDeleteAll}>Remove All</button>
        </div>
    )
}


const Option = (props) => {
    return (
        <div>
           {props.option}
            <button onClick={() => props.onButtonClickDeleteTask(props.option)}>Remove</button>
        </div>
    )
}

class AddOption extends React.Component { 

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

class NoteApp extends React.Component {

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



ReactDOM.render(<NoteApp />, document.querySelector('#app'))