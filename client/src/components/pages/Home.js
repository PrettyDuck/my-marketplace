import React, { Fragment } from 'react'
import Filter from '../layout/Filter'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Products from '../products/Products'

const Home = () => {
    return (
        <Fragment>
            <Navbar background={true} extendedBackground={true} />
            <div className='content-wrapper'>
                <Filter />
                <Products />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Home
