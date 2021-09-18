import React from 'react';
import './ResumePage.scss';
import Resume from '../../components/Resume/Resume';
import PictureHeading from '../../components/PictureHeading/PictureHeading';
import heading_image from '../../assets/header2.png';

const ResumePage = () => {
	 return(
		 <div className='resume-page'>
		 	<PictureHeading image={heading_image} text={'Resume'} />
			<Resume />
		 </div>
	 )
}
export default ResumePage;
