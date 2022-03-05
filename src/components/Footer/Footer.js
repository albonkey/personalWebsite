import React from 'react';
import './Footer.scss';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const Footer = (props) => {

  const { pathname } = props.location;

	let show = true;
	 if(pathname.includes("/admin")) {
		 show = false;

	 }

  return(
    show &&
    <footer className='footer'>
      <div className='footer-heading'>Let's Create Something Together</div>
      <SocialMediaIcons />
    </footer>
  )
}

export default Footer;
