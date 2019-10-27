import React, { Fragment, useState } from 'react'
import Navbar from '../layout/Navbar'
import crossHorizontal from '../../res/cross/cross-horizontal.svg'
import crossVertical from '../../res/cross/cross-vertical.svg'
import { connect } from 'react-redux'
import { addProductRequest } from '../../store/actions/ProductAction'

const AddProduct = (props) => {
    const { addProductRequest } = props;
    const [product, setProduct] = useState({
        name: '',
        location: '',
        description: '',
        category: '',
        price: '',
    });
    const { name, location, description, category, price } = product;
    const onChange = e => setProduct({ ...product, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
        addProductRequest(product);
        props.history.push('/');
    }
    const AddPhoto = e => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <Navbar background={true} isOnSellingPosition={true} />
            <div className='content-wrapper'>
                <div className='card add-product-card'>
                    <div className='card-label'>Add Product</div>
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
                            </select>
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='title'>Photos</label><br />
                            <div className='photo-field'>
                                <button className='add-photo-btn' style={{
                                    backgroundImage: `url(${crossHorizontal}),url(${crossVertical})`,
                                    backgroundPosition: 'center center,center center',
                                    backgroundRepeat: 'no-repeat,no-repeat'
                                }} onClick={AddPhoto}>

                                </button>
                            </div>
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='price'>Price</label><br />
                            <input type='number' name='price' className='primary-input' placeholder='For example: 1000$' value={price} onChange={onChange} />
                        </div>
                        <input type='submit' value='Add Product' className='card-submit-button small' />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    products: state.products,
})

export default connect(mapStateToProps, { addProductRequest })(AddProduct)
