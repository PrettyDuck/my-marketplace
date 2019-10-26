import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogoBlack from '../../res/logo-black.svg'
import LogoWhite from '../../res/logo-white.svg'
import FavoritesBlack from '../../res/favorites-black.svg'
import FavoritesWhite from '../../res/favorites-white.svg'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/AuthAction'
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
    const background = false;
    const extendedBackground = true;
    const onLogout = () => {
        document.querySelector('.user-interface-card').style.visibility = 'hidden';
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
    const colorPicker = () => {
        var a = Math.round(Math.random() * 345);
        return `hsl(${a}, 100%, 70%)`;
    }
    const getAbbr = () => {
        if (user !== null) {
            const arr = user.name.split(" ");
            const abbr = arr.map((item) => item.charAt(0));
            return abbr;
        }
    }
    const logedIconStyle = {
        borderRadius: '50%',
        backgroundColor: `${colorPicker()}`,
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgra(19,15,2,0.72)'
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
                            <Link to='/login' style={{color: '#2B2B2B'}}>Login</Link>
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
            <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={logedIconStyle}  onClick={() => {
                    document.querySelector('.user-interface-card').style.visibility = 'visible'
                }}>{getAbbr()}</span>
            </li>
        </Fragment>
    );
    const darkNavbar = (
        <Fragment>
            <nav className='dark-nav-bg'>
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
            <OutsideClickHandler
                onOutsideClick={() => {
                    if (document.querySelector('.user-interface-card').style.visibility === 'visible') {
                        document.querySelector('.user-interface-card').style.visibility = 'hidden'
                    }
                }}>
                <div className='user-interface-card'>
                    <ul className='user-interface-items'>
                        <li>
                            <span style={logedIconStyle}>{getAbbr()}</span>
                            {
                                
                            }
                        </li>
                        <li className='user-interface-button' style={{borderBottom:'1px solid #E4E4E4'}}>
                            <a href='#'>Edit Profile</a>
                        </li>
                        <li className='user-interface-button'>
                            <a href='#' onClick={onLogout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </OutsideClickHandler>
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
