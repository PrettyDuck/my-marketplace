import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { getSingleProductRequest, deleteProductRequest } from '../../store/actions/ProductAction';
import { processFavoriteRequest } from '../../store/actions/FavoriteAction';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import LocationIcon from '../../res/location-icon.svg';
import userIcon from '../../res/man.svg';

const Product = props => {
  const {
    match,
    getSingleProductRequest,
    deleteProductRequest,
    processFavoriteRequest,
    products: { currentProduct },
    auth: { user },
    favorites,
  } = props;

  const [favoriteStyle, setFavoriteStyle] = useState();

  // If id in favorites - it means that product is favorite
  // if (favorites.some(item => item === currentProduct._id)) {
  //   setFavoriteStyle(true);
  // } else {
  //   setFavoriteStyle(false);
  // }

  useEffect(() => {
    getSingleProductRequest(match.params.id);
    // Set special style for favorites products
  }, [getSingleProductRequest, match.params.id]);

  const setFavoriteItem = e => {
    e.preventDefault();
    processFavoriteRequest(currentProduct._id);
    if (favoriteStyle === true) {
      setFavoriteStyle(false);
    } else if (favoriteStyle === false) {
      setFavoriteStyle(true);
    }
  };

  const deleteItem = e => {
    e.preventDefault();
    deleteProductRequest({
      id: currentProduct._id,
      productImage: currentProduct.productImage,
    }); // second param for deleting img from storage
    processFavoriteRequest(currentProduct._id);
  };
  const updateItem = e => {
    e.preventDefault();
    props.history.push('/update');
  };
  return (
    <Fragment>
      <Navbar background={true} extendedBackground={true} />
      <div className='content-wrapper'>
        {currentProduct !== null ? (
          <div className='card-form product-window-item'>
            <ul className='product-window'>
              <li className='product-window-img-container'>
                <img
                  className='product-window-img'
                  alt='product-img'
                  src={currentProduct.productImage}
                />
              </li>
              <li className='product-window-info'>
                <div style={{ fontSize: '19px', color: '#373738' }}>
                  {currentProduct.name}{' '}
                  <span style={{ color: '#9d9d9d', fontSize: '14px' }}>
                    {currentProduct.date.slice(8, 10)}
                    {'-'}
                    {currentProduct.date.slice(5, 7)}
                    {'-'}
                    {currentProduct.date.slice(0, 4)}
                    {', '}
                    {currentProduct.date.slice(11, 16)}
                  </span>
                </div>
                <div style={{ margin: '8px 0px' }}>
                  <span style={{ marginRight: '10px' }}>
                    <img
                      src={LocationIcon}
                      style={{ width: '10px', height: '16px' }}
                      alt='location'
                    />
                  </span>
                  <span style={{ color: 'rgba(123,123,123,0.776523)' }}>
                    {currentProduct.location}
                  </span>
                </div>
              </li>
              <li className='product-window-desc'>{currentProduct.description}</li>
              <li className='product-window-price'>{'$' + currentProduct.price}</li>
            </ul>
            <div className='owner-block'>
              <div className='owner-info'>
                <div style={{ height: '33%', width: '100%', backgroundColor: '#349a89' }}> </div>
                <img src={userIcon} alt='userIcon' className='ownerIcon' />
                <div className='owner-name'>{currentProduct.productOwner}</div>
              </div>
              <ul className='owner-actions'>
                {/* {favoriteStyle ? (
                  <li>
                    <button onClick={setFavoriteItem} className='owner-button fav'>
                      Delete from favorites
                    </button>
                  </li>
                ) : (
                  <li>
                    <button onClick={setFavoriteItem} className='owner-button fav'>
                      Add to favorites
                    </button>
                  </li>
                )} */}
                <li>
                  <button onClick={setFavoriteItem} className='owner-button fav'>
                    Add/Delete favorite
                  </button>
                </li>
                {currentProduct.user === user._id ? (
                  <Fragment>
                    <li>Owner Actions</li>
                    <li>
                      <button onClick={deleteItem} className='owner-button'>
                        Delete current item
                      </button>
                    </li>
                    <li>
                      <button onClick={updateItem} className='owner-button'>
                        Update current item
                      </button>
                    </li>
                  </Fragment>
                ) : null}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  products: state.products,
  auth: state.auth,
  favorites: state.favorites,
});
export default connect(
  mapStateToProps,
  { getSingleProductRequest, deleteProductRequest, processFavoriteRequest },
)(Product);
