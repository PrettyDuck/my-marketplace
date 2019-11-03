import React, { Fragment } from 'react'
import ProductItem from './ProductItem'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

const Favorites = () => {
    let products;
    if (localStorage.getItem('products') === null) {
        products = [];
        return <h4>You need to add a products to favorites to see them here</h4>
    }
    else {
        products = JSON.parse(localStorage.getItem('products'));
    }
    return (
        <Fragment>
            <Navbar background={true} extendedBackground={true} isOnFavoritesPosition={true} />
            <div className='content-wrapper'>
                {products !== null ?
                    (<div className=' card-form products-wrapper' style={{ gridTemplateRows: `repeat(${Math.ceil(products.length / 4)},auto)` }}>
                        {products.map(product => (<ProductItem product={product} key={product._id} />))}
                    </div>) : null}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Favorites
