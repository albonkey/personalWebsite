import React from 'react';
import './Project.scss';

const Project = () => {
	 return(
		 <section className='project'>
		 	<div className='project-container'>
				<ul className='project-list'>
					<li className='project-list-item-active project-list-item'>The Uprising FC</li>
					<li className='project-list-item'>TeamFine</li>
					<li className='project-list-item'>Coaching App</li>
				</ul>
				<div className='project-main'>
					<div className='project-info'>
						<h3>
							Project built for The Uprising FC.
						</h3>
						<p>
							Created a website for The Uprising FC which is an organization looking to provide affordable soccer
							practices for everyone in the Los Angeles area. It was cool being able to contribute in a project on
							a subject I have great passion for. I learned a lot about working together with a client to provide
							the product they wanted.
						</p>
					</div>
				</div>

			</div>
		 </section>
	 )
}
export default Project;
