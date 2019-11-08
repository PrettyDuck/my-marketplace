import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { processFavoriteRequest } from '../../store/actions/FavoriteAction';
import Shape from '../../res/shape.svg';
import ShapeColor from '../../res/shape-color.svg';

const ProductItem = props => {
  const { product, processFavoriteRequest, favorites } = props;
  const { name, price, productImage } = product;
  const [favoriteStyle, setFavoriteStyle] = useState();

  useEffect(() => {
    // Set special style for favorites products
    // If id in favorites - it means that product is favorite
    if (favorites.some(item => item === product._id)) {
      setFavoriteStyle(`url(${ShapeColor})`);
    } else {
      setFavoriteStyle(`url(${Shape})`);
    }
  }, []);

  const setFavoriteItem = e => {
    e.preventDefault();
    processFavoriteRequest(product._id);
    if (favoriteStyle === `url(${ShapeColor})`) {
      setFavoriteStyle(`url(${Shape})`);
    } else if (favoriteStyle === `url(${Shape})`) {
      setFavoriteStyle(`url(${ShapeColor})`);
    }
  };

  return (
    <ul className='product-item'>
      <Link to={`/products/${product._id}`}>
        <li className='product-img-container'>
          <img src={productImage} alt='product-img' className='product-img' />
        </li>
        <li className='product-name'>{name}</li>
        <li className='product-price'>{'$' + price}</li>
      </Link>
      <li className='fav-container'>
        <button
          style={{
            width: '17px',
            height: '17px',
            border: 'none',
            background: 'none',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: favoriteStyle,
            outline: 'none',
          }}
          onClick={setFavoriteItem}
        />
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  favorites: state.favorites,
});

export default connect(
  mapStateToProps,
  { processFavoriteRequest },
)(ProductItem);
