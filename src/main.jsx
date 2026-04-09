import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './components/Context/LanguageContext/index.jsx'
import AppRouter from './router/index.jsx'

createRoot(document.getElementById('root')).render(
  <AppRouter />,
)
