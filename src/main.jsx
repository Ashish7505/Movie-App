
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MovieProvider } from './MovieApp/Useconetxt/Movieconetxt.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <MovieProvider>
    <Router>
    <App />
    </Router>
  </MovieProvider>
  
)
