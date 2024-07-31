import React from 'react'
import './Home.css'
import pic from '../assets/pic-1.png'
const Home = () => {
    return (
        <div className='home' id='home'>
            <div>
                <img src={pic} alt="" />
            </div>
            <div>
                <div className='greet'>Hello, I'm</div>
                <div className='name'>Mazhar Ali</div>
                <div className='role'>Frontend Developer</div>
                <div className='btn'>
                    <a href="/Mazhar_frontend.pdf" download='Mazhar_frontend.pdf'>
                        <button>Download CV</button>
                    </a>
                    <a href="#contact">
                        <button>Contact Info</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
