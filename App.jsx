import './App.css'
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Menu from './Menu'
import  Content  from './Content'

import  Menu from './Menu'
import Content from './Content'

const App = props => (
    <div className="App">
        <Router>
        <Menu />
        <Content />
        </Router>
    </div>
)

export default App