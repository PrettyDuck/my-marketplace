import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/pages/Home'
import Footer from './components/layout/Footer'
import Policy from './components/pages/Policy'
import { Provider } from 'react-redux';
import store from './store/store';
import SetAuthToken from '../src/utils/SetAuthToken'
import PrivateRoute from '../src/components/routing/PrivateRoute'

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}
const App = () => {
  const [products, setProducts] = useState([
    {
      name: 'Apple Watch Series 5',
      description: 'I just want to sell my clock',
      price: 500,
      location: 'Boston, USA',
      category: 'Electronics'
    },
    {
      name: 'Audi RS 6',
      description: 'I just want to sell my car',
      price: 50000,
      location: 'Kiev, Ukraine',
      category: 'Vehicles'
    },
    {
      name: 'New black coat',
      description: 'I just want to sell my coat',
      price: 300,
      location: 'Berlin, Germany',
      category: 'Clothing & Accessories'
    },
    {
      name: 'Leather jacket',
      description: 'I just want to sell my jacket',
      price: 300,
      location: 'Krakow, Poland',
      category: 'Clothing & Accessories'
    },
    {
      name: 'McDonnell Douglas AH-64 Apache',
      description: 'I just want to sell my Apache',
      price: 300000,
      location: 'Ostin, USA',
      category: 'Vehicles'
    },
    {
      name: 'Apple Watch Series 5',
      description: 'I just want to sell my clock',
      price: 500,
      location: 'Boston, USA',
      category: 'Electronics'
    },
    {
      name: 'Audi RS 6',
      description: 'I just want to sell my car',
      price: 50000,
      location: 'Kiev, Ukraine',
      category: 'Vehicles'
    },
    {
      name: 'New black coat',
      description: 'I just want to sell my coat',
      price: 300,
      location: 'Berlin, Germany',
      category: 'Clothing & Accessories'
    },
    {
      name: 'Leather jacket',
      description: 'I just want to sell my jacket',
      price: 300,
      location: 'Krakow, Poland',
      category: 'Clothing & Accessories'
    },
    {
      name: 'McDonnell Douglas AH-64 Apache',
      description: 'I just want to sell my Apache',
      price: 300000,
      location: 'Ostin, USA',
      category: 'Vehicles'
    }
  ])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='main'>
          <Navbar />
          <Switch>
            {/* <PrivateRoute exact path='/' render={(props) => <Home {...props} products={products} />}/> */}
            <PrivateRoute exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/policy' component={Policy}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
