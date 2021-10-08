import React from 'react';
import './AdminPage.scss';
import { Route, NavLink } from 'react-router-dom';
import AdminShop from '../../components/AdminShop/AdminShop';

const AdminPage = () => {
	console.log('Hello!')
	 return(
		 <div className='admin-page'>
		 	<div className='admin-menu'>
				<ul className='admin-menu-list'>
						<NavLink to="/admin/shop" className='admin-menu-item'>Shop</NavLink>
						<NavLink to="/admin/posts" className='admin-menu-item'>Posts</NavLink>
				</ul>


			</div>
			<Route path='/admin/shop' component={AdminShop} />

		 </div>
	 )
}
export default AdminPage;
