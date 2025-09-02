import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './components/Signup'
import Menu from './pages/Menu'
import SchoolCrud from './SchoolCrud'
import Card from './pages/Card'
import Login from './components/Login'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/school' element={<SchoolCrud />} />
        <Route path='/login' element={<Login />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App