import React from 'react'
import './Skills.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javaScript.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import saga from '../assets/saga.png'
import router from '../assets/router.png'
const Skills = () => {
    return (
        <div className='skills' id='skill'>
            <div>Skills</div>
            <div className='line'></div>

            <div className='skill-list'>
                <div>
                    <div><img src={html} alt="" /></div>
                    <div>
                        <h3>HTML</h3>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={css} alt="" />
                    </div>
                    <div>
                        <h3>CSS</h3>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div>
                    <div><img src={js} alt="" /></div>
                    <div>
                        <h3>JavaScript</h3>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div>
                    <div><img src={react} alt="" /></div>
                    <div>
                        <h3>React</h3>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={redux} alt="" />
                    </div>
                    <div>
                        <h3>Redux</h3>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div>
                    <div><img src={saga} alt="" /></div>
                    <div>
                        <h3>Saga</h3>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={router} alt="" />
                    </div>
                    <div>
                        <h3>Router</h3>
                        <p>Basic</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
