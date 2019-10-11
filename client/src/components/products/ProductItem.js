import React from 'react'
import ImageExample from '../../res/product-icon/landscape.jpg'

const ProductItem = ({product}) => {
    const {name,price} = product;
    return (
        <div className='product-item'>
            <img src={ImageExample} alt='product-img' className='product-img'/>
            <div className='product-name'>{name} </div>
            <div className='product-price'>${price}</div>
        </div>
    )
}

export default ProductItem
