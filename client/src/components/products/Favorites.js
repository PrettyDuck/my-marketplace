import React, { Fragment } from 'react';
import ProductItem from './ProductItem';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { connect } from 'react-redux';

const Favorites = ({ products: { products }, favorites }) => {
  var favProducts = products.filter(item => favorites.indexOf(item._id) !== -1); // getting all items from products which have id's defined in favorites
  return (
    <Fragment>
      <Navbar background={true} extendedBackground={true} isOnFavoritesPosition={true} />
      <div className='content-wrapper'>
        <div className='favorites-label'>
          Saved Items{' '}
          <span style={{ color: 'rgba(43,43,43,0.5)' }}>{'(' + favProducts.length + ')'}</span>
        </div>
        {favProducts !== null ? (
          <div
            className=' card-form products-wrapper'
            style={{ gridTemplateRows: `repeat(${Math.ceil(favProducts.length / 4)},auto)` }}>
            {favProducts.map(product => (
              <ProductItem product={product} key={product._id} />
            ))}
          </div>
        ) : null}
      </div>
      <Footer />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  products: state.products,
  favorites: state.favorites,
});

export default connect(
  mapStateToProps,
  {},
)(Favorites);
