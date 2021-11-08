import React from 'react';
import './PortfolioPage.scss';
import PictureHeading from '../../components/PictureHeading/PictureHeading';
import ProjectBig  from '../../components/ProjectBig/ProjectBig';
import heading_image from '../../assets/header1.jpg';
import projectList from './projectInfo';

const PortfolioPage = () => {
	 return(
		 <div className='portfolio-page'>
		 	<PictureHeading image={heading_image} text={'Portfolio'} />
			<div className='projects-container'>
			{
				projectList.map((project) => {
					return <ProjectBig
						title={project.title}
						img={project.img}
						description={project.description}
						techList={project.techList}
						links={project.links}
					/>
				})
			}
			</div>
		 </div>
	 )
}
export default PortfolioPage;
