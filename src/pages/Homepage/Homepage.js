import React from 'react';
import './Homepage.scss';
import Hook from '../../components/Hook/Hook';
import Header from '../../components/Header/Header';
import AboutMe from '../../components/AboutMe/AboutMe';
import Project from '../../components/Project/Project';
import SideSocialIcons from '../../components/SideSocialIcons/SideSocialIcons';
const Homepage = () => {

	 return(
		 <div className='homepage'>
		 	<Hook />
			<AboutMe />
			<Project />
			<SideSocialIcons />
		 </div>
	 )
}
export default Homepage;
