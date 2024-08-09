import { useEffect, useState } from 'react'

import './App.css'
import Navigation from './component/Navigation'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import MobileNav from './component/MobileNav'
import { projects } from './projectData'
import ProjectPage from './component/ProjectPage'
import leftArrow from './assets/left-arrow.png'

import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [sideNav, setSideNav] = useState('close');
  const [advanceProject, setAdvanceProject] = useState(null);


  const handleMobileNav = () => {
    setSideNav((pre) => {
      return pre === 'close' ? 'open' : 'close';
    })
  }

  useEffect(() => {
    setAdvanceProject(() => {
      return projects.filter(item => item.type === 'advance')
    })

  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={(<section className='container'>
          <section className='nav-section'><Navigation sideNav={sideNav} handleMobileNav={handleMobileNav} /></section>
          <section className='home-section'><Home /></section>
          <section className='skill-section'><Skills /></section>
          <section className='project-section'><Project type={advanceProject} />
            <section className='more-project-btn'>
              <img className='left' src={leftArrow} alt="" />
              <button onClick={() => navigate('/projects')}>More Project ...</button>
            </section>
          </section>

          <section className='about-section'> <About /></section>
          <section className='contact-section'><Contact /></section>
          <section className={sideNav}><MobileNav /></section>
        </section>)} />

        <Route path='/projects' element={(<section className='container'>
          <ProjectPage />
        </section>)} />

      </Routes>
    </div>
  )
}

export default App
