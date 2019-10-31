import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const { name, price,productImage } = product;
    return (
        <div className='product-item'>
            <Link to={`/products/${product._id}`}>
                <img src={productImage} alt='product-img' className='product-img' />
                <div className='product-name'>{name} </div>
                <div className='product-price'>{price}</div>
            </Link>
        </div>
    )
}

export default ProductItem
