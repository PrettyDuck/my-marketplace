import React from 'react'
import ImageExample from '../../res/product-icon/landscape.jpg'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const { name, price } = product;
    return (
        <div className='product-item'>
            <Link to={`/products/${product._id}`}>
                <img src={ImageExample} alt='product-img' className='product-img' />
                <div className='product-name'>{name} </div>
                <div className='product-price'>${price}</div>
            </Link>
        </div>
    )
}

export default ProductItem
