import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Services from './Pages/Services'
import Maids from './Pages/Maids'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/maids' element={<Maids />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
