import React from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom';

const MobileNav = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <div className={`mobileNav`}>
                <div><Link to='/' onClick={() => scrollToSection('skill')}>Skills</Link></div>
                <div><Link to='/' onClick={() => scrollToSection('project')}>Projects</Link></div>
                <div><Link to='/' onClick={() => scrollToSection('about')}>About</Link></div>
                <div><Link to='/' onClick={() => scrollToSection('contact')}>Contact</Link></div>
            </div>
        </>
    )
}

export default MobileNav
