import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Services from './Pages/Services'
import Maids from './Pages/Maids'
import BookingForm from './Components/BookingForm'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/maids' element={<Maids />} />
        <Route path='/login' element={<Login />} />
        <Route path='/form' element={<BookingForm />} />
      </Routes>
    </>
  )
}

export default App
