import React from 'react';
import './AboutMe.scss';
import aboutme from '../../assets/aboutme.png';

const AboutMe = () => {
	 return(
		 <div className='about-me'>
		 		<div className='hologram'>
					<div className='hologram-upper'>
						<div className='hologram-info'>
							<h1 className='heading2'>About Me</h1>
							<p className='hologram-p'>
								Currently pursuing a degree in Computer Science at California State University of Los Angeles.
								I have a passion for building websites and creating web-applications. I've always had an interest
								for computers, and created my first website 4 years ago.
							</p>
							<p className='hologram-p'>
								I'm always looking to connect and meet new people. Reach out if you want to work together or
								just talk and share ideas.
							</p>

						</div>
						<img src={aboutme} className='hologram-img'/>
					</div>
					<div className='hologram-technologies'>
						<h3>
							Technologies I've worked with:
						</h3>
						<ul className='hologram-list'>
							<li className='hologram-list-item'>JavaScript</li>
							<li className='hologram-list-item'>React</li>
							<li className='hologram-list-item'>MongoDB</li>
							<li className='hologram-list-item'>NodeJS</li>
							<li className='hologram-list-item'>Redux</li>
							<li className='hologram-list-item'>AWS Amplify</li>
							<li className='hologram-list-item'>GraphQL</li>
						</ul>
					</div>

				</div>

		 </div>
	 )
}
export default AboutMe;
