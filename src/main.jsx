import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import To_do from './components/to_do.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <To_do />
  </StrictMode>,
)
