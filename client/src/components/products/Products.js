import React, { Fragment } from 'react'
import ProductItem from './ProductItem'

const Products = ({ products }) => {
    return (
        <div className='card-form products-wrapper'>
            {products.map(product => (<ProductItem product={product} />))}
        </div>
    )
}

export default Products
