import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { AppProvider } from './context/AppContext'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter><MotionConfig reducedMotion="user"><AppProvider><ErrorBoundary><App /></ErrorBoundary></AppProvider></MotionConfig></BrowserRouter>)
