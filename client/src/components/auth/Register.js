import React, { useEffect, useState, Fragment } from 'react'
import showPassIcon from '../../res/show-pass-icon.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest, clearErrors } from '../../store/actions/AuthAction'
import { alertRequest } from '../../store/actions/AlertAction'
import Alerts from '../layout/Alerts'
import showHidePassword from '../../utils/Show-HidePassword'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'


const Register = (props) => {
    const { auth: { isAuthenticated, error }, alerts: { alertsArray }, registerRequest, clearErrors, alertRequest } = props; // destructuring form state auth
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
        if (error === 'User already exists') {
            console.error(error);
            if (alertsArray.length === 0) {
                alertRequest(error);
            }
            clearErrors();
        }
    }, [error, isAuthenticated, props.history, alertRequest, alertsArray.length, clearErrors])
    const [user, setUser] = useState({
        email: '',
        name: '',
        password: '',
        secondPassword: ''
    });
    const { email, name, password, secondPassword } = user;
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            console.error('Please enter all fields');
            if (alertsArray.length === 0) {
                alertRequest('Please enter all fields');
            }
        }
        else if (password !== secondPassword) {
            console.error('Passwords do not match');
            if (alertsArray.length === 0) {
                alertRequest('Passwords do not match');
            }
        }
        else {
            registerRequest({
                name,
                email,
                password
            })
        }
    }
    return (
        <Fragment>
            <Navbar background={false} />
            <div className='content-wrapper auth-wrapper'>
                <div className='card auth-card'>
                    <div className='card-label'>Register</div>
                    <form className='card-funct-form' onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label><br />
                            <input type='email' name='email' className='primary-input' placeholder='Example@gmail.com' value={email} onChange={onChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='name'>Full Name</label><br />
                            <input type='text' name='name' className='primary-input' placeholder='Tony Stark' value={name} onChange={onChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label><br />
                            <input type='password' name='password' className='primary-input' value={password} onChange={onChange} />
                            <img src={showPassIcon} alt='show-password' className='show-password' onClick={showHidePassword} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password Again</label><br />
                            <input type='password' name='secondPassword' className='primary-input' value={secondPassword} onChange={onChange} />
                            <img src={showPassIcon} alt='show-password' className='show-password' onClick={showHidePassword} />
                        </div>
                        <input type='submit' value='Register' className='card-submit-button' />
                    </form>
                </div>
                <Alerts />
                <div className='card auth-card redirect-card'>
                    <span>I already have an account,</span><Link to='/login' className='redirect-label'>Log in</Link>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
const mapStateToProps = state => ({
    auth: state.auth,
    alerts: state.alertsReducer
})
export default connect(mapStateToProps, { registerRequest, clearErrors, alertRequest })(Register);
