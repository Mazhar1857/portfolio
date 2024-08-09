import React from 'react'
import './Project.css'
import ProjectItem from './ProjectItem'
import { projects } from '../projectData'
const Project = ({ type, title = 'Projects' }) => {
    return (
        <div className='project'>
            <div>{title}</div>
            <div className='line'></div>
            <div className='projects'>
                {type && type.map((item, index) => (
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
