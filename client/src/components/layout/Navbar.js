import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogoBlack from '../../res/logo-black.svg'
import LogoWhite from '../../res/logo-white.svg'
import FavoritesBlack from '../../res/favorites-black.svg'
import FavoritesWhite from '../../res/favorites-white.svg'
import FavoritesFilled from '../../res/favorites-filled.svg'
import { connect } from 'react-redux'
import UserInterface from './UserInterface'
import UserIcon from './UserIcon'

const Navbar = (props) => {
    const { auth: { isAuthenticated }, background, extendedBackground, isOnSellingPosition,isOnFavoritesPosition } = props

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/login' className='dark-nav-content'>Login</Link>
            </li>
        </Fragment>
    );
    // Color for our icon
    const colorForIcon = Math.round(Math.random() * 345);
    // 
    const iconWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const authLinks = (
        <Fragment>
            <UserIcon color={`hsl(${colorForIcon}, 100%, 70%)`} iconWrapperStyle={iconWrapperStyle} />
        </Fragment>
    )
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
                            <Link to='/login' style={{ color: '#2B2B2B' }}>Login</Link>
                        </li>
                        <li>
                            <Link to='/favorites'><img src={FavoritesBlack} alt='Favorites' /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
    const darkNavbar = (
        <Fragment>
            <nav className='dark-nav-bg'>
                <div className='nav-wrapper'>
                    <Link to='/'><img src={LogoWhite} alt='Logo' className='logo' /></Link>
                    <ul className={isOnSellingPosition ? 'nav-container-selling' : 'nav-container'}>
                        {isOnSellingPosition ? null :
                            <li>
                                <Link to='/sell'><button className='nav-button'>Sell</button></Link>
                            </li>
                        }
                        {isAuthenticated ? authLinks : guestLinks}
                        {isOnFavoritesPosition ?
                            <li>
                                <Link to='/favorites'><img src={FavoritesFilled} alt='Favorites' /></Link>
                            </li> :
                            <li>
                                <Link to='/favorites'><img src={FavoritesWhite} alt='Favorites' /></Link>
                            </li>}
                    </ul>
                </div>
                {/*  //if extendedBackground equal true - SearchForm, false - null  */}
                {extendedBackground ? SearchForm : null}
                <UserInterface color={`hsl(${colorForIcon}, 100%, 70%)`} />
            </nav>
        </Fragment>
    )
    return (
        <header>
            {/*  //if background equal true - black navbar, false - light navbar  */}
            {background ? darkNavbar : lightNavbar}
        </header>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Navbar)
