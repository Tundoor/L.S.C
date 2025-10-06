import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import Study from './pages/study.jsx'
import Planner from './pages/planner.jsx'
import Navbar from './navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <App />
    {/* <Study /> */}
    {/* <Planner /> */}
  </StrictMode>
)
