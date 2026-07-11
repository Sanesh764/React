import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Footer from './components/footer/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup />
    <Footer/>
  </StrictMode>,
)
