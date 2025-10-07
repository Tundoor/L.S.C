import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import Study from './pages/study.jsx'
import Planner from './pages/planner.jsx'
import Navbar from './components/navbar.jsx'
import  AddItem from './components/addItem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}
    <AddItem />
    {/* <App /> */}
    {/* <Study /> */}
    {/* <Planner /> */}
  </StrictMode>
)
