import React, { Fragment } from 'react'
import showPassIcon from '../../res/show-pass-icon.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='content-wrapper auth-wrapper'>
            <div className='auth-card'>
                <div className='auth-label'>Login</div>
                <form className='auth-form'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label><br />
                        <input type='email' name='email' placeholder='Example@gmail.com' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label><br />
                        <input type='password' name='password' />
                        <img src={showPassIcon} alt='show-password' className='show-password' />
                    </div>
                    <Link to='/' className='restore-pass-link'>Don't remember password?</Link>
                    <input type='submit' value='Continue' className='auth-button ' />
                </form>
            </div>
            <div className='auth-card redirect-card'>
                <span>I have no account,</span><Link to='/register' className='redirect-label'>Register now</Link>
            </div>
        </div>
    )
}

export default Login;
