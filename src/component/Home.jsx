import React from 'react'
import './Home.css'
import pic from '../assets/pic-1.png'
import { Link } from 'react-router-dom'
const Home = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='home' >
            <div>
                <img src={pic} alt="" />
            </div>
            <div>
                <div className='greet'>Hello, I'm</div>
                <div className='name'>Mazhar Ali</div>
                <div className='role'>Frontend Developer</div>
                <div className='btn'>
                    <a href="./Mazhar_frontend.pdf" download='Mazhar_frontend.pdf'>
                        <button>Download CV</button>
                    </a>
                    <Link to='/' onClick={() => scrollToSection('contact')}>
                        <button>Contact Info</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
