import React from 'react'
import Filter from '../layout/Filter'
import Products from '../products/Products'

const Home = ({products}) => {
    return (
        <div className='content-wrapper'>
            <Filter/>
            <Products products={products}/>
        </div>
    )
}

export default Home
