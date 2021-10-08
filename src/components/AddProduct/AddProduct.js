import React, { useState } from 'react';
import './AddProduct.scss';
import Input from '../Input/Input';
import { Storage, Auth, API, graphqlOperation } from 'aws-amplify';
import { createProduct } from '../../graphql/mutations'
import { PhotoPicker} from 'aws-amplify-react';
import aws_exports from '../../aws-exports';

const AddProduct = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [countInStock, setCountInStock ] = useState(null);
	const [shipped, setShipped] = useState(false);
	const [imagePreview, setImagePreview] = useState('');
	const [image, setImage] = useState({});
	const [isUploading, setIsUploading] = useState(false);
	const [percentUploaded, setPercentUploaded] = useState(0);

	 return(
		 <div className='add-product'>
			 <form>
				 <Input name={'name'} type={'text'} text={'Product name'} setValue={setName} value={name} required={true} />
				 <Input name={'description'} type={'text'} text={'Description'} setValue={setDescription} value={description} required={true} />
				 <Input name={'countInStock'} type={'number'} text={'Count In Stock'} setValue={setCountInStock} value={countInStock} required={true} />
				 <div className='undertitle'>Is the product shipped or emailed to customer?</div>
				 <div>
					 <input type='radio' id='ship' name='shipping' value='ship' />
					 <label htmlFor='ship'> Shipped </label>
					 <input type='radio' id='email' name='shipping' value='email' />
					 <label htmlFor='email'> Email </label>
				 </div>

				 {
					 imagePreview && (
						 <img className='image-preview' src={imagePreview} alt='Product Preview' />
					 )
				 }
				 {
					 percentUploaded > 0 && (
						 <div>
							 {percentUploaded} %
						 </div>
					 )
				 }
				 <PhotoPicker
					 title='Product Image'
					 preview='hidden'
					 onLoad={url => setImagePreview(url)}
					 onPick={file => setImage(file)}
					 theme={{
							 formContainer: {
								 margin: '15px 0px',
								 color: 'black',
								 backgroundColor: 'rgb(240,240,240)',
								 display: 'flex',
								 alignItems: 'center',
								 justifyContent: 'center',
								 borderRadius: '5px'
							 },
							 formSection: {
								 display: 'flex',
								 flexDirection: 'column',
								 alignItems: 'center',
								 justifyContent: 'center'
							 },
							 sectionHeader:{
								 padding: '0.2em 0'
							 }
					 }}

					 />


				 <button type='submit' className='button'  disabled={!image || !description || !name}>Add Product</button>
			 </form>
		 </div>
	 )
}
export default AddProduct;
