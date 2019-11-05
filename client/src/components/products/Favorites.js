import React, { Fragment } from 'react'
import ProductItem from './ProductItem'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

const Favorites = () => {
    let products;
    if (localStorage.getItem('products') === null) {
        products = [];
    }
    else {
        products = JSON.parse(localStorage.getItem('products'));
    }
    return (
        <Fragment>
            <Navbar background={true} extendedBackground={true} isOnFavoritesPosition={true} />
            <div className='content-wrapper'>
                <div className='favorites-label'>Saved Items <span style={{color:'rgba(43,43,43,0.5)'}}>{'(' + products.length + ')'}</span></div>
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
