import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchProductsRequest } from '../../store/actions/ProductAction';

const SearchForm = props => {
  const { searchProductsRequest } = props;
  const [searchArg, setSearchArg] = useState({
    searchName: '',
    searchLocation: '',
  });
  const { searchName, searchLocation } = searchArg;
  const onChange = e => {
    setSearchArg({ ...searchArg, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    searchProductsRequest(searchArg);
  };

  return (
    <div className='card-container'>
      <form className='card-form search-form' onSubmit={onSubmit}>
        <input
          type='text'
          name='searchName'
          placeholder='Search product by name'
          className='search-name-field'
          value={searchName}
          onChange={onChange}
        />
        <input
          type='text'
          name='searchLocation'
          placeholder='Location'
          className='search-location-field'
          value={searchLocation}
          onChange={onChange}
        />
        <input type='submit' value='Search' className='search-submit' />
      </form>
    </div>
  );
};
export default connect(
  null,
  { searchProductsRequest },
)(SearchForm);
