import React, { Fragment } from 'react'
import Navbar from '../layout/Navbar'
import crossHorizontal from '../../res/cross/cross-horizontal.svg'
import crossVertical from '../../res/cross/cross-vertical.svg'

const AddProduct = () => {
    return (
        <Fragment>
            <Navbar background={true} isOnSellingPosition={true} />
            <div className='content-wrapper'>
                <div className='card add-product-card'>
                    <div className='card-label'>Add Product</div>
                    <form className='card-funct-form'>
                        <div className='form-group small'>
                            <label htmlFor='title'>Title</label><br />
                            <input type='text' name='title' placeholder='For example: Iron man suit' />
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='title'>Location</label><br />
                            <input type='text' name='title' placeholder='For example: Los Angeles, CA' />
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='title'>Description</label><br />
                            <textarea type='text' name='description' placeholder='For example: Iron man suit' />
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='title'>Photos</label><br />
                            <div className='photo-field'>
                                <button className='add-photo-btn' style={{
                                    backgroundImage: `url(${crossHorizontal}),url(${crossVertical})`,
                                    backgroundPosition: 'center center,center center',
                                    backgroundRepeat: 'no-repeat,no-repeat'
                                }}>

                                </button>
                            </div>
                        </div>
                        <div className='form-group small'>
                            <label htmlFor='title'>Price</label><br />
                            <input type='text' name='price' placeholder='For example: 1000$' />
                        </div>
                        <input type='submit' value='Add Product' className='card-submit-button small' />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default AddProduct
