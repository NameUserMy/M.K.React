import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Rout } from './Component/Routing/Routers.jsx'

import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rout} />
  </StrictMode>,
)
