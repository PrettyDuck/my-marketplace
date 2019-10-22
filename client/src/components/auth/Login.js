import React, { useEffect, useState } from 'react'
import showPassIcon from '../../res/show-pass-icon.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest, clearErrors } from '../../store/actions/AuthAction'
import { alertRequest } from '../../store/actions/AlertAction'
import Alerts from '../layout/Alerts'

const Login = (props) => {
    const { auth: { isAuthenticated, error }, alerts: { alertsArray }, loginRequest, clearErrors, alertRequest } = props;
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
        if (error === 'Ivalid Credentials') {
            console.error(error);
            if (alertsArray.length === 0) {
                alertRequest(error);
            }
            clearErrors();
        }
    }, [error, isAuthenticated]);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const { email, password } = user;
    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            console.error('Please fill all fields');
            if (alertsArray.length === 0) {
                alertRequest('Please fill all fields');
            }
        }
        else {
            loginRequest({ email, password });
        }
    }
    return (
        <div className='content-wrapper auth-wrapper'>
            <div className='auth-card'>
                <div className='auth-label'>Login</div>
                <form className='auth-form' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label><br />
                        <input type='email' name='email' placeholder='Example@gmail.com' onChange={onChange} value={email} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label><br />
                        <input type='password' name='password' onChange={onChange} value={password} />
                        <img src={showPassIcon} alt='show-password' className='show-password' />
                    </div>
                    <Link to='/' className='restore-pass-link'>Don't remember password?</Link>
                    <input type='submit' value='Continue' className='auth-button ' />
                </form>
            </div>
            <Alerts />
            <div className='auth-card redirect-card'>
                <span>I have no account,</span><Link to='/register' className='redirect-label'>Register now</Link>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    auth: state.auth,
    alerts: state.alertsReducer
})
export default connect(mapStateToProps, { loginRequest, clearErrors, alertRequest })(Login);
