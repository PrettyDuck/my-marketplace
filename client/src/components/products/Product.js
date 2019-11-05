import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getSingleProductRequest, deleteProductRequest } from '../../store/actions/ProductAction'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import LocationIcon from '../../res/location-icon.svg'

const Product = (props) => {
    const { match, getSingleProductRequest, deleteProductRequest, products: { currentProduct }, auth: { user } } = props;
    useEffect(() => {
        getSingleProductRequest(match.params.id);
    }, [getSingleProductRequest, match.params.id]);
    const deleteItem = e => {
        e.preventDefault();
        deleteProductRequest({
            id: currentProduct._id,
            productImage: currentProduct.productImage
        }); // second param for deleting img from storage
        // Delete product from favorites
        let favoritesProducts;
        if (localStorage.getItem('products') === null) {
            favoritesProducts = [];
        }
        else {
            favoritesProducts = JSON.parse(localStorage.getItem('products'));
        }
        const indexProduct = favoritesProducts.findIndex(item=> item._id === currentProduct._id); // getting position of element where id equal id of our product
        // If item is already in LS we need to delete it from there
        if (indexProduct !== -1) {
            favoritesProducts.splice(indexProduct, 1);
            localStorage.setItem('products', JSON.stringify(favoritesProducts));
        }

    }
    const updateItem = e => {
        e.preventDefault();
        props.history.push('/update');
    }
    return (

        <Fragment>
            <Navbar background={true} extendedBackground={true} />
            <div className='content-wrapper'>
                {currentProduct !== null ?
                    (
                        <div className='card-form product-window-item'>
                            <ul className='product-window'>
                                <li className='product-window-img-container'>
                                    <img className='product-window-img' alt='product-img' src={currentProduct.productImage} />
                                </li>
                                <li className='product-window-info'>
                                    <div style={{ fontSize: '19px', color: '#373738' }}>
                                        {currentProduct.name} {' '}
                                        <span style={{ color: '#9d9d9d', fontSize: '14px' }}>
                                            {currentProduct.date.slice(8, 10)}{'-'}
                                            {currentProduct.date.slice(5, 7)}{'-'}
                                            {currentProduct.date.slice(0, 4)}{', '}
                                            {currentProduct.date.slice(11, 16)}
                                        </span>
                                    </div>
                                    <div style={{margin: '8px 0px'}}>
                                        <span style={{ marginRight: '10px' }}>
                                            <img src={LocationIcon} style={{ width: '10px', height: '16px' }} alt='location' />
                                        </span>
                                        <span style={{color:'rgba(123,123,123,0.776523)'}}>
                                            {currentProduct.location}
                                        </span>
                                    </div>
                                </li>
                                <li className='product-window-desc'>
                                    {currentProduct.description}
                                </li>
                                <li className='product-window-price'>
                                    {'$' + currentProduct.price}
                                </li>
                            </ul>
                            <div className='owner-block'> 
                                
                            </div>
                            {/* {currentProduct.user === user._id ? (
                                <div>
                                    <button onClick={deleteItem}>Delete current item</button>
                                    <button onClick={updateItem}>Update current item</button>
                                </div>) : (
                                    <h4>Have a nice day</h4>)} */}
                        </div>
                    ) : null}
            </div>
            <Footer />
        </Fragment>
    )
}
const mapStateToProps = state => ({
    products: state.products,
    auth: state.auth,
});
export default connect(mapStateToProps, { getSingleProductRequest, deleteProductRequest })(Product)
