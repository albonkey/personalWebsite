import React, { useState } from 'react';
import './Hook.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import video from '../../assets/hook_bg.mp4';
import image from '../../assets/BG2.jpg';
const Hook = () => {
	const [arrow, setArrow] = useState(false);

  const displayArrow = () => {
    if(window.scrollY >= 100){
      setArrow(false)
    } else {
      setArrow(true)
    }

  }
  window.addEventListener('scroll', displayArrow);

	 return(
		 <div className='hook'>
		 		<FontAwesomeIcon className={'arrow-down'} icon={faAngleDown} size='2x' />
				<img  className='bg-image' src={image} />

		 </div>
	 )
}
export default Hook;
