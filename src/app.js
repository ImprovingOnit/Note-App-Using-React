import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css/normalize.css'
import NoteApp from './components/NoteApp'
import './styles/styles.scss'


ReactDOM.render(<NoteApp />, document.querySelector('#app'))