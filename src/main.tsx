import React from 'react'
import ReactDOM from 'react-dom'
import { registerSW } from 'virtual:pwa-register'
import { App } from './App'
import './main.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

registerSW()