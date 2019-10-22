import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogoBlack from '../../res/logo-black.svg'
import LogoWhite from '../../res/logo-white.svg'
import FavoritesBlack from '../../res/favorites-black.svg'
import FavoritesWhite from '../../res/favorites-white.svg'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/AuthAction'

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
    const background = false;
    const extendedBackground = true;
    const onLogout = () => {
        logout();
    }
    const SearchForm = (
        <div className='card-container'>
            <form className='card-form search-form'>
                <input type='text' placeholder='Search product by name' className='search-name-field' />
                <input type='text' placeholder='Location' className='search-location-field' />
                <input type='submit' value='Search' className='search-submit' />
            </form>
        </div>
    )
    const colorPicker = () =>
    {
        const hex = ['#ff4000','#ff8000','#ffbf00','#ffff00','#bfff00','#80ff00','#40ff00',
        '#00ff00','#00ff40','#00ff80','#00ffbf','#00ffff','#00bfff','#0080ff','#0040ff',
        '#0000ff','#4000ff','#8000ff','#bf00ff','#ff00ff','#ff00bf','#ff0080','#ff0040','#ff0000'];
        var item =  hex[Math.floor(Math.random()*hex.length)];
        return item;
    }
    const logedIconStyle = {
        borderRadius: '50%',
        backgroundColor:`${colorPicker()}`,
        width: '40px',
        height: '40px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
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
    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/login' className='dark-nav-content'>Login</Link>
            </li>
        </Fragment>
    );
    const authLinks = (
        <Fragment>
            <li style = {{ display:'flex', justifyContent: 'center',alignItems:'center'}}>
                <span style={logedIconStyle}></span>
            </li>
        </Fragment>
    );
    const darkNavbar = (
        <Fragment>
            <nav className='dark-bg'>
                <div className='nav-wrapper'>
                    <Link to='/'><img src={LogoWhite} alt='Logo' className='logo' /></Link>
                    <ul className='nav-container'>
                        <li>
                            <Link to='#'><button className='nav-button'>Sell</button></Link>
                        </li>
                        {isAuthenticated ? authLinks : guestLinks}
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
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar)
