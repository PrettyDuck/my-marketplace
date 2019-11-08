import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/pages/Home';
import AddProduct from './components/products/AddProduct';
import Product from './components/products/Product';
import Policy from './components/pages/Policy';
import store from './store/store';
import SetAuthToken from './utils/SetAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import UpdateProduct from './components/products/UpdateProduct';
import history from './history';
import Favorites from './components/products/Favorites';

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}
const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className='main'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/sell' component={AddProduct} />
            <PrivateRoute exact path='/update' component={UpdateProduct} />
            <PrivateRoute exact path='/policy' component={Policy} />
            <PrivateRoute exact path='/products/:id' component={Product} />
            <PrivateRoute exact path='/favorites' component={Favorites} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
