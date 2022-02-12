import React from 'react'
import ReactDOM from 'react-dom'
import { registerSW } from 'virtual:pwa-register'
import { App } from './App'
import { UIContextProvider } from './contexts/UIContext'
import './main.css'

ReactDOM.render(
  <React.StrictMode>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

registerSW()