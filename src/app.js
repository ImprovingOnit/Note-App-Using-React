

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>Note-App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}


class Action extends React.Component {
    render () {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
            Options
            <Option />
            <Option />
            </div>
        )
    }
}

class Option extends React.Component { 
    render () {
        return (
            <div>Option</div>
        )
    }
}

class AddOption extends React.Component { 
    render () {
        return (
            <div>Add Options</div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.querySelector('#app'))