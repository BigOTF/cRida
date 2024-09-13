import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/font.css'

import AboutPage from './routes/AboutPage/AboutPage.jsx'
import MainPage from './routes/CarSharing/MainPage.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/ride' element={<MainPage />}/>
      </Routes>
    </Router>
)
