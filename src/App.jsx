import React from 'react'
import "./App.css"
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="w-full overflow-hidden">
    <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
