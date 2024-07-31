import React from 'react'
import './ProjectItem.css'
const ProjectItem = ({ name, img, demo, git }) => {
    return (
        <div className='project-item'>
            <div className='thumbnail'>
                <img src={img} alt="" />
                <div className='btn'>
                    <a href={git} target='_blank'><button>GitHub</button></a>
                    <a href={demo} target='_blank'><button>Demo</button></a>
                </div>
            </div>
            <div className='project-name'>
                <div title={name}>{name.length > 10 ? `${name.slice(0, 11)} ...` : name}</div>
            </div>
        </div>
    )
}

export default ProjectItem
