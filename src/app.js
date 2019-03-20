import React from 'react'
import ReactDOM from 'react-dom'

import NoteApp from './components/NoteApp'
import './styles/styles.scss'

const Layout = () => {
    return (
        <div>
            <p>header</p>
            <p>footer</p>
        </div>
    )
}



ReactDOM.render(<NoteApp />, document.querySelector('#app'))