import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { getProductsRequest } from '../../store/actions/ProductAction';

const Products = ({ productsState: { products, searched, filtered }, getProductsRequest }) => {
  useEffect(() => {
    getProductsRequest();
  }, [getProductsRequest]);
  if (products !== null && products.length === 0) {
    return <h4>Please add a product</h4>;
  }
  if (searched !== null && searched.length === 0) {
    return <h4>Products not found</h4>;
  }
  if (filtered !== null && filtered.length === 0) {
    return <h4>Products not found</h4>;
  }
  return (
    <Fragment>
      {products !== null ? (
        <div
          className='card-form products-wrapper'
          style={{ gridTemplateRows: `repeat(${Math.ceil(products.length / 4)},auto)` }}>
          {searched !== null ? (
            <Fragment>
              {filtered !== null
                ? filtered.map(product => <ProductItem product={product} key={product._id} />)
                : searched.map(product => <ProductItem product={product} key={product._id} />)}
            </Fragment>
          ) : (
            <Fragment>
              {filtered !== null
                ? filtered.map(product => <ProductItem product={product} key={product._id} />)
                : products.map(product => <ProductItem product={product} key={product._id} />)}
            </Fragment>
          )}
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  productsState: state.products,
});

export default connect(
  mapStateToProps,
  { getProductsRequest },
)(Products);
