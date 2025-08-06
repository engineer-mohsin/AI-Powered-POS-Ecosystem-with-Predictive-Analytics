import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// =================| Import Components |=================
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
