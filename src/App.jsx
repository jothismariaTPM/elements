import React,{ useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TermsAndConditions from "./pages/TermsAndConditions";
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/production' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route
          path="/termsAndConditions"
          element={<TermsAndConditions />}
        />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
