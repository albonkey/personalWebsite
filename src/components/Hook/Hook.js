import React, { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './Hook.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import video from '../../assets/hook_bg.mp4';
import image from '../../assets/BG2.jpg';
import image_mobile from '../../assets/BG2_mobile.jpg';
const Hook = () => {
	const [arrow, setArrow] = useState(false);
	const { height, width } = useWindowDimensions();
	const onMobile = width < 700;
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
				{
					onMobile ?
					<img  className='bg-image' src={image_mobile	} /> :
					<img  className='bg-image' src={image} />

				}


		 </div>
	 )
}
export default Hook;
