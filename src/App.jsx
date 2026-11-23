import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Companion from './pages/Companion'
import Journal from './pages/Journal'
import Wellness from './pages/Wellness'
import Booking from './pages/Booking'
import About, { Safety } from './pages/About'
export default function App() {
  const { pathname } = useLocation()
  // Do not return window.scrollTo's value from an effect; React expects either
  // no return value or a cleanup function.
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className="flex min-h-screen flex-col"><Navbar />
      <motion.main key={pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }} className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth mode="login" />} /><Route path="/signup" element={<Auth mode="signup" />} />
          <Route path="/dashboard" element={<Dashboard />} /><Route path="/mood" element={<Dashboard />} /><Route path="/mood-tracker" element={<Dashboard />} />
          <Route path="/companion" element={<Companion />} /><Route path="/ai-companion" element={<Companion />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/wellness" element={<Wellness />} /><Route path="/booking" element={<Booking />} /><Route path="/psychologists" element={<Booking />} />
          <Route path="/about" element={<About />} /><Route path="/safety" element={<Safety />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main><Footer /></div>)
}
