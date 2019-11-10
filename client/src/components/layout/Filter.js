import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  filterProductsRequest,
  filterSearchedProductsRequest,
} from '../../store/actions/ProductAction';
const Filter = props => {
  const {
    filterProductsRequest,
    filterSearchedProductsRequest,
    products: { searched },
  } = props;
  const [filterArg, setFilterArg] = useState({
    filterCategory: '',
    filterPriceFrom: '',
    filterPriceTo: '',
  });
  useEffect(() => {
    if (searched === null) {
      // escape first render call
      if (filterArg.filterCategory !== '' || filterPriceFrom !== '' || filterPriceTo !== '') {
        filterProductsRequest(filterArg);
        console.log('Use Effect called from 1');
      }
    } else {
      // escape first render call
      if (filterArg.filterCategory !== '' || filterPriceFrom !== '' || filterPriceTo !== '') {
        filterSearchedProductsRequest(filterArg);
        console.log('Use Effect called from 2');
      }
    }
  }, [filterArg]);
  const { filterCategory, filterPriceFrom, filterPriceTo } = filterArg;
  const onChange = e => {
    setFilterArg({ ...filterArg, [e.target.name]: e.target.value });
  };
  return (
    <form className='filter-form card-form'>
      <select
        className='filter-select'
        name='filterCategory'
        value={filterCategory}
        onChange={onChange}>
        <option defaultValue value='Choose Category'>
          Choose Category
        </option>
        <option value='Electronics'>Electronics</option>
        <option value='Home &amp; Garden'>Home &amp; Garden</option>
        <option value='Clothing &amp; Accessories'>Clothing &amp; Accessories</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Vehicles'>Vehicles</option>
      </select>
      <input
        type='number'
        min='0'
        placeholder='Price from (USD)'
        className='filter-input-field'
        name='filterPriceFrom'
        value={filterPriceFrom}
        onChange={onChange}
      />
      <input
        type='number'
        min='0'
        placeholder='Price to (USD)'
        className='filter-input-field'
        name='filterPriceTo'
        value={filterPriceTo}
        onChange={onChange}
      />
    </form>
  );
};
const mapStateToProps = state => ({
  products: state.products,
});
export default connect(
  mapStateToProps,
  { filterProductsRequest, filterSearchedProductsRequest },
)(Filter);
