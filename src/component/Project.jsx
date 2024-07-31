import React from 'react'
import './Project.css'
import ProjectItem from './ProjectItem'
import { projects } from '../projectData'
const Project = () => {
    return (
        <div className='project' id='projects'>
            <div>Projects</div>
            <div className='line'></div>
            <div className='projects'>
                {projects.map((item, index) => (
                    <div key={index}>
                        <ProjectItem
                            name={item.name}
                            img={item.img}
                            demo={item.demoUrl}
                            git={item.gitUrl}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Project
