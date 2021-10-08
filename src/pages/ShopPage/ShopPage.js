import React from 'react';
import './ShopPage.scss';

import PictureHeading from '../../components/PictureHeading/PictureHeading';
import heading_image from '../../assets/header2.jpg';


const ShopPage = () => {

	 return(
		 <div className='shop-page'>
		 	<PictureHeading image={heading_image} text={'Shop'} />
			<div className='shop-placeholder'>Will be coming soon</div>
		 </div>
	 )
}
export default ShopPage;
