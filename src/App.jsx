import React from 'react'
import Header from './component/header'
import About from './component/About'
import Project from './component/Project'
import Testimonials from './component/Testimonials'
import Contact from './component/Contact'

import { ToastContainer } from 'react-toastify'
import Footer from './component/Footer'


function App() {
  return (
    <div className='w-full overflow-hidden'>
     <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
