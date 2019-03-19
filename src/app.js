


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
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
            {props.options.map((option, index) => {
                return <Option key={index} taskName={option} />
            })}
            <button onClick={props.onButtonClickDelete}>Remove All</button>
        </div>
    )
}


const Option = (props) => {
    return (
        <div>{props.taskName}</div>
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
        this.onButtonClickDelete = this.onButtonClickDelete.bind(this)
        this.onButtonClickPick = this.onButtonClickPick.bind(this)
        this.onFormSubmitAddOption = this.onFormSubmitAddOption.bind(this)
        this.state = { options: []}
    }

    onButtonClickDelete () {
        this.setState(() => {
            return {
                options: []
            }
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
        this.setState({ options: this.state.options.concat(option) })
    }

    render () {
        const title = "Welcome to Note App"
        const subTitle = "Easier Way to Manage your life"
        return (
        <div>
            <Header title={title} subTitle={subTitle}/>
            <Action hasOptions={this.state.options.length > 0} onButtonClickPick={this.onButtonClickPick}/>
            <Options options={this.state.options} onButtonClickDelete={this.onButtonClickDelete}/>
            <AddOption onFormSubmitAddOption={this.onFormSubmitAddOption}/>
        </div>
        )
    }
}



ReactDOM.render(<NoteApp />, document.querySelector('#app'))