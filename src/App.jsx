import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Qualification from './components/Qualification/Qualification'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills />
      <Qualification />
      <Work/>
      <Contact />
      <Footer />
    </main>
     </>
  )
}

export default App
