

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}


class Action extends React.Component {

    onButtonClick () {
        console.log('clicked')
    }

    render () {
        return (
            <div>
                <button onClick={this.onButtonClick}>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {

    onButtonClickRemoveAll () {
        console.log('clicked')
    }

    render () {
        return (
            <div>
            <h2>Options</h2>
            {this.props.options.map((option, index) => {
                return <Option key={index} taskName={option} />
            })}
            <button onClick={this.onButtonClickRemoveAll}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component { 
    render () {
        return (
            <div>{this.props.taskName}</div>
        )
    }
}

class AddOption extends React.Component { 

    onFormSubmit (e) {
        e.preventDefault ()
        if (e.target.elements.task.value) {
            console.log('Hello World')
        }
    }

    render () {
        return (
            <div>
                <h3>Add Options</h3>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Add some task" name="task"/>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}

class NoteApp extends React.Component {
    render () {
        const title = "Welcome to Note App"
        const subTitle = "Easier Way to Manage your life"
        const options = ["Task1", "Task2", "Task3"]
        return (
        <div>
            <Header title={title} subTitle={subTitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
        </div>
        )
    }
}



ReactDOM.render(<NoteApp />, document.querySelector('#app'))