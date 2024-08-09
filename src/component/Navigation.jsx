import React, { useState } from 'react'
import './Navigation.css'
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
const Navigation = ({ sideNav, handleMobileNav }) => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='nav'>
            <Link to='/' onClick={() => scrollToSection('home')}>MD Mazhar Ali</Link>
            <div className={`desktop mobile ${sideNav}`}>
                <div>
                    <div><Link to='/' onClick={() => scrollToSection('skill')}>Skills</Link></div>
                    <div><Link to='/' onClick={() => scrollToSection('project')}>Projects</Link></div>
                    <div><Link to='/' onClick={() => scrollToSection('about')}>About</Link></div>
                    <div><Link to='/' onClick={() => scrollToSection('contact')}>Contact</Link></div>
                </div>
            </div>
            <div className={`mobileNav-toggle-btn ${sideNav}`} onClick={handleMobileNav}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Navigation
