import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router/index.jsx'

createRoot(document.getElementById('root')).render(
  <AppRouter />,
)
