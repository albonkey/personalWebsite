import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const [menu, setMenu] = useState(false);
	const [scrolledDown, setScrolledDown] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 100){
      setScrolledDown(true)
    } else {
      setScrolledDown(false)
    }

  }
  window.addEventListener('scroll', changeBackground);
	 return(

		 <header className={ 'header' + (scrolledDown ? ' header-active' : '')}>
		 		<div className='header-logo-container'>
					<img src={logo} className='header-logo' />
					<input type="checkbox" id="btnControl" onClick={() => setMenu(!menu)}/>
		      <label htmlFor="btnControl" className='header-menu-btn'><FontAwesomeIcon icon={faBars} size='2x' /></label>
				</div>
				<nav className={(menu ? 'header-nav-active' : ' ') + ' header-nav' }>
					<Link to='/' className='header-nav-link' onClick={() => setMenu(false)}>
						Home
					</Link>
					<Link to='/portfolio' className='header-nav-link' onClick={() => setMenu(false)}>
						Portfolio
					</Link>
					<Link to='/resume' className='header-nav-link' onClick={() => setMenu(false)}>
						Resume
					</Link>
					<Link to='/shop' className='header-nav-link' onClick={() => setMenu(false)}>
						Shop
					</Link>

				</nav>
				<Link to='/contact'>
					<button className={ 'header-button ' + (menu ? ' ' : 'header-button-disabled')} onClick={() => setMenu(false)}>Contact Me</button>
				</Link>
		 </header>
	 )
}
export default Header;
