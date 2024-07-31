import { useState } from 'react'

import './App.css'
import Navigation from './component/Navigation'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import MobileNav from './component/MobileNav'

function App() {
  const [sideNav, setSideNav] = useState('close');

  const handleMobileNav = () => {

    setSideNav((pre) => {
      return pre === 'close' ? 'open' : 'close';
    })

  }

  return (
    <div className='app'>
      <div className='container'>
        <section className='nav-section'><Navigation sideNav={sideNav} handleMobileNav={handleMobileNav} /></section>
        <section className='home-section'><Home /></section>
        <section className='skill-section'><Skills /></section>
        <section className='project-section'><Project /></section>
        <section className='about-section'> <About /></section>
        <section className='contact-section'><Contact /></section>
        <section className={sideNav}><MobileNav /></section>
      </div>
    </div>
  )
}

export default App
