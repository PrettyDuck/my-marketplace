import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Shape from '../../res/shape.svg'
import ShapeColor from '../../res/shape-color.svg'

const ProductItem = ({ product }) => {
    const { name, price, productImage } = product;
    // Set special style for favorites products
    let products;
    if (localStorage.getItem('products') === null) {
        products = [];
    }
    else {
        products = JSON.parse(localStorage.getItem('products'));
    }
    let favButtonStyle;
    const index = products.findIndex(item=> item._id === product._id); // getting position of element where id equal id of our product
    if (index !== -1) // if localStorage contain out item 
    {
        favButtonStyle = `url(${ShapeColor})`;
    }
    else {
        favButtonStyle = `url(${Shape})`;
    }
    
    const [favorite, setFavorite] = useState(favButtonStyle);
    
    const setFavoriteItem = e => 
    {
        e.preventDefault();
        let favoritesProducts;
        if (localStorage.getItem('products') === null) {
            favoritesProducts = [];
        }
        else {
            favoritesProducts = JSON.parse(localStorage.getItem('products'));
        }
        const indexProduct = favoritesProducts.findIndex(item=> item._id === product._id); // getting position of element where id equal id of our product
        // If item is already in LS we need to delete it from there
        if (indexProduct !== -1) {
            favoritesProducts.splice(indexProduct, 1);
            localStorage.setItem('products', JSON.stringify(favoritesProducts));
            setFavorite(`url(${Shape})`);
        }
        else {
            favoritesProducts.push(product);
            localStorage.setItem('products', JSON.stringify(favoritesProducts));
            setFavorite(`url(${ShapeColor})`);
        }
    }
    return (
        <ul className='product-item'>
            <Link to={`/products/${product._id}`}>
                <li className='product-img-container'>
                    <img src={productImage} alt='product-img' className='product-img' />
                </li>
                <li className='product-name'>
                    {name}
                </li>
                <li className='product-price'>
                    {'$' + price}
                </li>
            </Link>
            <li className='fav-container'>
                <button style={{
                    width: '17px',
                    height: '17px',
                    border: 'none',
                    background: 'none',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: favorite,
                    outline: 'none',
                }} onClick={setFavoriteItem} ></button>
            </li>
        </ul >
    )
}

export default ProductItem
