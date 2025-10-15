import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './pages/App.jsx'
import Study from './pages/study.jsx'
import Navbar from './components/navbar.jsx'
import  AddItem from './components/addItem.jsx'
import AddConnection from "./components/addConnection.jsx"
import Community from './pages/community.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/study" element={<Study />} />
    <Route path="/connect" element={<Community />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
