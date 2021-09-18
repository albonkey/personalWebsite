import React from 'react';
import './TestimonialCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight} from '@fortawesome/free-solid-svg-icons';
const TestimonialCard = ({name, title, text}) => {
	 return(
		 <div className='testimonial-card'>

		 	<div className='heading2'>{name}</div>
			<div className='undertitle'>{title}</div>
			<p className='p testimonial-p'>{text}</p>
			<div className='testimonial-card-tag'>
				<FontAwesomeIcon icon={faQuoteRight} className='testimonial-card-icon'/>
			</div>
		 </div>
	 )
}
export default TestimonialCard;
