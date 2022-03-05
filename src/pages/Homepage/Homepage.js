import React from 'react';
import './Homepage.scss';
import Hook from '../../components/Hook/Hook';
import AboutMe from '../../components/AboutMe/AboutMe';
import Project from '../../components/Project/Project';
import Testimonials from '../../components/Testimonials/Testimonials';
const Homepage = () => {

	 return(
		 <div className='homepage'>
		 	<Hook />
			<AboutMe />
			<Project />
			<Testimonials />
		 </div>
	 )
}
export default Homepage;
