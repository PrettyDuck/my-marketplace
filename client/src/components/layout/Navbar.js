import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogoBlack from '../../res/logo-black.svg'
import LogoWhite from '../../res/logo-white.svg'
import FavoritesBlack from '../../res/favorites-black.svg'
import FavoritesWhite from '../../res/favorites-white.svg'

const Navbar = () => {
    const background = false;
    const extendedBackground = true;
    const SearchForm = (
        <div className='card-container'>
            <form className='card-form search-form'>
                <input type='text' placeholder='Search product by name' className='search-name-field' />
                <input type='text' placeholder='Location' className='search-location-field' />
                <input type='submit' value='Search' className='search-submit' />
            </form>
        </div>
    )
    const lightNavbar = (
        <Fragment>
            <nav>
                <div className='nav-wrapper'>
                    <Link to='/'><img src={LogoBlack} alt='Logo' className='logo' /></Link>
                    <ul className='nav-container'>
                        <li>
                            <Link to='#'><button className='nav-button'>Sell</button></Link>
                        </li>
                        <li>
                            <Link to='/login' className='light-nav-content'>Login</Link>
                        </li>
                        <li>
                            <Link to='/'><img src={FavoritesBlack} alt='Favorites' className='favorites' /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
    const darkNavbar = (
        <Fragment>
            <nav className='dark-bg'>
                <div className='nav-wrapper'>
                    <Link to='/'><img src={LogoWhite} alt='Logo' className='logo' /></Link>
                    <ul className='nav-container'>
                        <li>
                            <Link to='#'><button className='nav-button'>Sell</button></Link>
                        </li>
                        <li>
                            <Link to='/login' className='dark-nav-content'>Login</Link>
                        </li>
                        <li>
                            <Link to='/'><img src={FavoritesWhite} alt='Favorites' className='favorites' /></Link>
                        </li>
                    </ul>
                </div>
                {extendedBackground ? SearchForm : null}
            </nav>
        </Fragment>
    )
    return (
        <header>
            {background ? lightNavbar : darkNavbar}
        </header>
    )
}

export default Navbar
