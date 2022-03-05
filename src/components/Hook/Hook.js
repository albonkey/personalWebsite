import React, { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './Hook.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import SideSocialIcons from '../../components/SideSocialIcons/SideSocialIcons';


const Hook = () => {
	const [arrow, setArrow] = useState(true);
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
		 	{
				arrow &&
				<FontAwesomeIcon className={'arrow-down'} icon={faAngleDown} size='2x' />
			}
		 			<SideSocialIcons />
		 </div>
	 )
}
export default Hook;
