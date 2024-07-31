import React, { useState } from 'react'
import './Navigation.css'
import MobileNav from './MobileNav';
const Navigation = ({ sideNav, handleMobileNav }) => {


    return (
        <div className='nav'>
            <a href='#home'>MD Mazhar Ali</a>
            <div className={`desktop mobile ${sideNav}`}>
                <div>
                    <div><a href="#skill">Skills</a></div>
                    <div><a href="#projects">Projects</a></div>
                    <div><a href="#about">About</a></div>
                    <div><a href="#contact">Contact</a></div>
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
