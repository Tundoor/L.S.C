import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import Study from './pages/study.jsx'
import Navbar from './navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    {/* <App /> */}
    <Study />
  </StrictMode>,
)
