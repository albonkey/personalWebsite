import React from 'react';
import './SideSocialIcons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';

const SideSocialIcons = () => {
	 return(
		 <ul className='side-social-icons'>
       <li>
         <a href='https://www.linkedin.com/in/carl-christian-solli-237378171/' target="_blank">
           <FontAwesomeIcon icon={faLinkedin}  className='icon'/>
         </a>
       </li>
       <li>
         <a href='https://www.instagram.com/carl_solli/' target="_blank">
           <FontAwesomeIcon icon={faInstagram}  className='icon'/>
         </a>
       </li>
       <li>
         <a href='https://github.com/albonkey' target="_blank">
           <FontAwesomeIcon icon={faGithub}  className='icon'/>
         </a>
       </li>
       <li>
         <a href='https://www.facebook.com/carlchristian.dokkensolli' target="_blank">
           <FontAwesomeIcon icon={faFacebook} className='icon'/>
         </a>
       </li>
       <li>
         <a href='https://www.youtube.com/channel/UCJGrrOLIdc1nYKoQpqORmfQ' target="_blank">
           <FontAwesomeIcon icon={faYoutube}  className='icon'/>
         </a>
       </li>
     </ul>
	 )
}
export default SideSocialIcons;
