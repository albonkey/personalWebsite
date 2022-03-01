import React from 'react';
import './PlayButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const PlayButton = () => {
	 return(
		 <div className='play-button'>
		 		<FontAwesomeIcon className={'play-button-arrow'} icon={faPlay} size='1x' />
		 </div>
	 )
}
export default PlayButton;
