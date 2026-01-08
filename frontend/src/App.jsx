import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact'
import WorkPage from './pages/WorkPage'
import About from './pages/About'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='bg-white w-screen'>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/work" element={<WorkPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
