import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './components/Root/Root.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
