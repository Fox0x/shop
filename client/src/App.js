import React from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Routes} from './routes'

function App() {
    const routes = Routes(false)

    return (
        <BrowserRouter>
            <div>{routes}</div>
        </BrowserRouter>
    )
}

export default App
