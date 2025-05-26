import React, { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Contact } from './pages'

// Lazy load Projects for code-splitting
const Projects = lazy(() => import('./pages/Projects'))

const App = () => {
  return (
    <>
      <main className='bg-slate-300/20'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Projects />
                </Suspense>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App