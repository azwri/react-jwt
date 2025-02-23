import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Nav from './components/Nav'
import Home from './pages/Home'
import Register from './pages/Register'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Nav />
        <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
