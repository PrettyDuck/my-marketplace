import React, { Fragment } from 'react'
import showPassIcon from '../../res/show-pass-icon.svg'
import { Link } from 'react-router-dom'

const Register = () => {
    
    return (
        <div className='content-wrapper auth-wrapper'>
            <div className='auth-card'>
                <div className='auth-label'>Register</div>
                <form className='auth-form'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label><br />
                        <input type='email' name='email' placeholder='Example@gmail.com' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Full Name</label><br />
                        <input type='text' name='name' placeholder='Tony Stark' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label><br />
                        <input type='password' name='password' />
                        <img src={showPassIcon} alt='show-password' className='show-password' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password Again</label><br />
                        <input type='password' name='password' />
                        <img src={showPassIcon} alt='show-password' className='show-password' />
                    </div>
                    <input type='submit' value='Register' className='auth-button ' />
                </form>
            </div>
            <div className='auth-card redirect-card'>
                <span>I already have an account,</span><Link to='/login' className='redirect-label'>Log in</Link>
            </div>
        </div>
    )
}

export default Register
