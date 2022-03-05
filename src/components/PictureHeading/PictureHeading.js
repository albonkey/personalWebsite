import React from 'react';
import './PictureHeading.scss';

const PictureHeading = ({text, image}) => {
	 return(
		 <div className='picture-heading'>
			 <img className='picture-heading-image' src={image} alt=''/>
			 <div className='picture-heading-text'>{text}</div>
		 </div>
	 )
}
export default PictureHeading;
