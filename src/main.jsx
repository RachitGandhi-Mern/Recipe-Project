
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Recipecontext from './Context/Recipecontext'

createRoot(document.getElementById('root')).render(
  <Recipecontext>
  <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>
  </Recipecontext>
)