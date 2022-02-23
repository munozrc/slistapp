import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { registerSW } from 'virtual:pwa-register'

import { App } from './app'
import { UIContextProvider } from './contexts/UIContext'

import './main.css'

ReactDOM.render(
  <StrictMode>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </StrictMode>,
  document.getElementById('root')
)

registerSW()
