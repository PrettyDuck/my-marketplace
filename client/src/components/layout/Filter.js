import React from 'react';

const Filter = () => {
  return (
    <form className='filter-form card-form'>
      <select className='filter-select'>
        <option defaultValue value='Choose Category'>
          Choose Category
        </option>
        <option value='Electronics'>Electronics</option>
        <option value='Home &amp; Garden'>Home &amp; Garden</option>
        <option value='Clothing &amp; Accessories'>Clothing &amp; Accessories</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Vehicles'>Vehicles</option>
      </select>
      <input type='number' placeholder='Price from (USD)' className='filter-input-field' />
      <input type='number' placeholder='Price to (USD)' className='filter-input-field' />
    </form>
  );
};

export default Filter;
