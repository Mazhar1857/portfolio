import React from 'react'
import './MobileNav.css'

const MobileNav = () => {
    return (
        <>
            <div className={`mobileNav`}>
                <div><a href="#skill">Skills</a></div>
                <div><a href="#projects">Projects</a></div>
                <div><a href="#about">About</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
        </>
    )
}

export default MobileNav
