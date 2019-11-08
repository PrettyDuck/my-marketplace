import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest, clearErrors } from '../../store/actions/AuthAction';
import { alertRequest } from '../../store/actions/AlertAction';
import showPassIcon from '../../res/show-pass-icon.svg';
import Alerts from '../layout/Alerts';
import showHidePassword from '../../utils/Show-HidePassword';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Login = props => {
  const {
    auth: { isAuthenticated, error },
    alerts,
    loginRequest,
    clearErrors,
    alertRequest,
  } = props;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      console.error(error);
      if (alerts.length === 0) {
        alertRequest(error);
      }
      clearErrors();
    }
  }, [error, isAuthenticated, props.history, alertRequest, alerts.length, clearErrors]);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.error('Please fill all fields');
      if (alerts.length === 0) {
        alertRequest('Please fill all fields');
      }
    } else {
      loginRequest({ email, password });
    }
  };
  return (
    <Fragment>
      <Navbar background={false} />
      <div className='content-wrapper auth-wrapper'>
        <div className='card auth-card'>
          <div className='card-label'>Login</div>
          <form className='card-funct-form' onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <br />
              <input
                type='email'
                name='email'
                className='primary-input'
                placeholder='Example@gmail.com'
                value={email}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <br />
              <input
                type='password'
                name='password'
                className='primary-input'
                value={password}
                onChange={onChange}
              />
              <img
                src={showPassIcon}
                alt='show-password'
                className='show-password'
                onClick={showHidePassword}
              />
            </div>
            <Link to='/' className='restore-pass-link'>
              Don't remember password?
            </Link>
            <input type='submit' value='Continue' className='card-submit-button' />
          </form>
        </div>
        <Alerts classNameForAlertStyling={'card auth-card redirect-card'} />
        <div className='card auth-card redirect-card'>
          <span>I have no account,</span>
          <Link to='/register' className='redirect-label'>
            Register now
          </Link>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  alerts: state.alertsReducer,
});
export default connect(
  mapStateToProps,
  { loginRequest, clearErrors, alertRequest },
)(Login);
