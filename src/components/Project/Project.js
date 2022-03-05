import React, { useState } from 'react';
import './Project.scss';
import {projects} from './project_info';
const Project = () => {
	const [project, setProject] = useState(1);

	const project_images = projects.map(_project => require('../../assets/' + _project.image).default);



	 return(
		 <section className='project'>
		 	<h2 className='heading2'>PROJECTS</h2>
		 	<div className='project-container'>
				<div className='project-images-container'>

					<img
						className={'project-image' + (project === 0 ? ' project-image-focus' : ' ')}
						src={project_images[0]}
						onClick={() => setProject(0)}
						alt={project.name}
					/>
					<img
						className={'project-image' + (project === 1 ? ' project-image-focus' : ' ')}
						src={project_images[1]}
						onClick={() => setProject(1)}
						alt={project.name}
					/>
					<img
						className={'project-image' + (project === 2 ? ' project-image-focus' : ' ')}
						src={project_images[2]}
						onClick={() => setProject(2)}
						alt={project.name}
					/>

				</div>
				<h3 className='heading2'>{projects[project].name}</h3>
				<p className='project-info'>
					{projects[project].info}
				</p>
				<button className='button-primary'>
					View Project
				</button>
			</div>
		 </section>
	 )
}
export default Project;
