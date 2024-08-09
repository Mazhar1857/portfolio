import React, { useEffect, useState } from 'react'
import './ProjectPage.css'
import Project from './Project'
import { projects } from '../projectData'
import leftArrow from '../assets/left-arrow.png'
import { useNavigate } from 'react-router-dom'
const ProjectPage = () => {
    const navigate = useNavigate();
    const [advanceProject, setAdvanceProject] = useState(null);
    const [intermediateProject, setIntermediateProject] = useState(null);
    const [beginnerProject, setBeginnerProject] = useState(null);


    useEffect(() => {

        setAdvanceProject(() => {
            return projects.filter(item => item.type === 'advance')
        })

        setIntermediateProject(() => {
            return projects.filter(item => item.type === 'intermediate')
        })
        setBeginnerProject(() => {
            return projects.filter(item => item.type === 'beginner')
        })
    }, [])

    return (
        <div className='project-page'>
            <button onClick={() => navigate('/')}><img src={leftArrow} alt="" />Back</button>
            <section>
                <Project type={advanceProject} title='Advance' />
            </section>
            <section>
                <Project type={intermediateProject} title='Intermediate' />
            </section>
            <section>
                <Project type={beginnerProject} title='Beginner' />
            </section>
        </div>
    )
}

export default ProjectPage
