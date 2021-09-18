import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import {testimonialData} from './testimonialData.js'
import './Testimonials.scss';

const Testimonials = () => {
	 return(
		 <div className='testimonials'>
		 {
			 testimonialData.map((testimonial) => {
			 return (
				 	<TestimonialCard
					 	name={testimonial.name}
						title={testimonial.title}
						text={testimonial.text}
						/>
					)
		 })
	 }
		 </div>
	 )
}
export default Testimonials;
