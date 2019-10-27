import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/pages/Home'
import AddProduct from './components/products/AddProduct'
import Policy from './components/pages/Policy'
import { Provider } from 'react-redux';
import store from './store/store';
import SetAuthToken from '../src/utils/SetAuthToken'
import PrivateRoute from '../src/components/routing/PrivateRoute'

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='main'>
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/sell' component={AddProduct}></PrivateRoute>
            <PrivateRoute exact path='/policy' component={Policy}></PrivateRoute>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
