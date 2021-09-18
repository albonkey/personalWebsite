import React from 'react';
import './PortfolioPage.scss';
import PictureHeading from '../../components/PictureHeading/PictureHeading';
import heading_image from '../../assets/header1.jpg';

const PortfolioPage = () => {
	 return(
		 <div className='portfolio-page'>
		 	<PictureHeading image={heading_image} text={'Portfolio'} />
		 </div>
	 )
}
export default PortfolioPage;
