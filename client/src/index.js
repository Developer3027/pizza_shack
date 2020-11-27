import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { GlobalStyle } from './GlobalStyles'

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
