import React from 'react';
import './ShopPage.scss';
import PictureHeading from '../../components/PictureHeading/PictureHeading';
import heading_image from '../../assets/header3.png';

const ShopPage = () => {
	 return(
		 <div className='shop-page'>
		 	<PictureHeading image={heading_image} text={'Shop'} />
		 </div>
	 )
}
export default ShopPage;
