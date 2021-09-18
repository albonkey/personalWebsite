import React from 'react';
import './Homepage.scss';
import Hook from '../../components/Hook/Hook';
import Header from '../../components/Header/Header';
import AboutMe from '../../components/AboutMe/AboutMe';
import Project from '../../components/Project/Project';
import Testimonials from '../../components/Testimonials/Testimonials';
import SideSocialIcons from '../../components/SideSocialIcons/SideSocialIcons';
const Homepage = () => {

	 return(
		 <div className='homepage'>
		 	<Hook />
			<AboutMe />
			<Project />
			<Testimonials />
			<SideSocialIcons />
		 </div>
	 )
}
export default Homepage;
