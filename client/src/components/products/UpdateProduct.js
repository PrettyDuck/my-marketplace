import React, { Fragment, useState,useEffect } from 'react'
import {connect} from 'react-redux'
import Navbar from '../layout/Navbar'
import Alerts from '../layout/Alerts'
import crossHorizontal from '../../res/cross/cross-horizontal.svg'
import crossVertical from '../../res/cross/cross-vertical.svg'
import { alertRequest } from '../../store/actions/AlertAction'
import { updateProductRequest } from '../../store/actions/ProductAction'

const UpdateProduct = (props) => {
    const { products:{currentProduct} ,alerts: { alertsArray }, alertRequest,updateProductRequest } = props;
    const [product, setProduct] = useState({
        name:'',
        location:'',
        description:'',
        category: '',
        productImage:'',
        price: ''
    });
    useEffect(()=>{
        if(currentProduct!==null){
            setProduct(currentProduct);
        }
    },[currentProduct])
    const { name, location, description, category, productImage, price } = product;
    const onChange = e => setProduct({ ...product, [e.target.name]: e.target.value })
    const onChangeProductImg = e => {
        setProduct({ ...product, productImage: e.target.files[0] });
        alertRequest('File added');
        console.log(e.target.files[0])
    };
    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || location === '' || description === '' || category === '' || productImage === '' || price === '') {
            console.log('Please fill all products fields');
            if (alertsArray.length === 0) {
                alertRequest('Please fill all fields');
            }
        }
        else {
            product.oldImage = currentProduct.productImage; // adding hew field for further deleting our old image
            console.log(product);
            updateProductRequest(product);
        }
    }
    return (
        <Fragment>
            <Navbar background={true} isOnSellingPosition={true} />
            <div className='content-wrapper'>
                <div className='card add-product-card'>
                    <div className='card-label'>Edit Product</div>
                    <form className='card-funct-form' onSubmit={onSubmit}>
                        <div className='form-group small'>
                            <label htmlFor='name'>Title</label><br />
                            <input type='text' name='name' className='primary-input' placeholder='For example: Iron man suit' value={name} onChange={onChange} />
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='location'>Location</label><br />
                            <input type='text' name='location' className='primary-input' placeholder='For example: Los Angeles, CA' value={location} onChange={onChange} />
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='description'>Description</label><br />
                            <textarea type='text' name='description' className='primary-input' placeholder='For example: Iron man suit' value={description} onChange={onChange}
                                style={{ fontSize: '18px' }} ></textarea>
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='category'>Category</label><br />
                            <select className='category-field primary-input' name='category' value={category} onChange={onChange}>
                                <option defaultValue value="Choose Category">Choose Category</option>
                                <option value="Electronics" >Electronics</option>
                                <option value="Home &amp; Garden">Home &amp; Garden</option>
                                <option value="Clothing &amp; Accessories">Clothing &amp; Accessories</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Vehicles" >Vehicles</option>
                                <option value="Others" >Others</option>
                            </select>
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='title'>Photos</label><br />
                            <div className='photo-field'>
                                <input type='file' name='productImage' onChange={onChangeProductImg} className='add-photo-btn' style={{
                                    backgroundImage: `url(${crossHorizontal}),url(${crossVertical})`,
                                    backgroundPosition: 'center center,center center',
                                    backgroundRepeat: 'no-repeat,no-repeat'
                                }} />
                            </div>
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='price'>Price</label><br />
                            <input type='number' name='price' className='primary-input' placeholder='For example: 1000$' value={price} onChange={onChange} />
                        </div>
                        <div className='form-group small'>
                            <Alerts />
                        </div>
                        <input type='submit' value='Update Product' className='card-submit-button small' />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    products: state.products,
    alerts: state.alertsReducer
})
export default connect(mapStateToProps, { updateProductRequest, alertRequest })(UpdateProduct)
