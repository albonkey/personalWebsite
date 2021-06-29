import React, { useState } from 'react';
import './Hook.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import video from '../../assets/hook_bg.mp4'
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
				<video autoPlay muted loop className="bg-video">
					<source src={video} type="video/mp4" />
				</video>

		 </div>
	 )
}
export default Hook;
