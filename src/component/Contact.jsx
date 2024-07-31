import React from 'react'
import './Contact.css';
import gmail from '../assets/gmail.png';
import linkedIn from '../assets/linkedin.png'
import telephone from '../assets/telephone.png'
import twitter from '../assets/twitter.png'
import github from '../assets/gitHub.png'
const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div>Contact Me</div>
            <div className='line'></div>
            <ul>
                <li><div><img src={gmail} alt="" /></div><a>ali.mazhar1857@gmail.com</a></li>
                <li><div><img src={linkedIn} alt="" /></div><a href="https://www.linkedin.com/in/md-mazhar-ali-15535a315/" target='_blank'>LinkedIn</a></li>
                <li><div><img src={telephone} alt="" /></div><a>9123285844</a></li>
                <li><div><img src={twitter} alt="" /></div><a href="https://x.com/md_ali1857" target='_blank'>md_ali1857</a></li>
                <li><div><img src={github} alt="" /></div><a href="https://github.com/Mazhar1857" target='_blank'>Mazhar1857</a></li>
            </ul>
        </div>
    )
}

export default Contact
