import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './jsx/App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index/>
  </StrictMode>,
)








