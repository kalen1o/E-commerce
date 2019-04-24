import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Header from './components/Header';
import VideoComponent from './components/Header/LocalComponents/VideoComponent';
import ProductList from './components/ProductList';
import UserProfile from './components/UserProfile';
import FastBuy from './components/FastBuy';
import { Footer } from './components/Footer';

import reducer from './store/reducer'
import {Provider, connect}   from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {fetchLocation} from './store/actions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faUser, faUserTimes, faShoppingCart, faUsersCog, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faSignInAlt, faUser, faUserTimes, faShoppingCart, faUsersCog, faVolumeMute, faVolumeUp);

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
store.subscribe(() => console.log(store.getState()));

const NotFound = () => (
  <div>404 NOT FOUND</div>
)

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    cb()
  },
  signOut(cb) {
    this.isAuthenticated = false
    cb()
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true 
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

class App extends Component {
  constructor(props) {
    super(props);
    this.latitude = null
    this.longitude = null

    this.options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    this.success = pos => {
      var crd = pos.coords;
      this.latitude = crd.latitude
      this.longitude = crd.longitude
      const {fetchLocation} = this.props;
      fetchLocation(this.latitude, this.longitude)
    };

    this.error = err => {
      console.log(this.props)
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
  }
  render() {
    return (
      <BrowserRouter history = {createHistory()}>
        <Header />
        <Switch>
          <Route path="/" component = { VideoComponent } exact />
          <Route path="/shop/:category" component = { ProductList } exact />
          <PrivateRoute path="/profile" component = { UserProfile } exact />
          <Route path="/fastbuy" component = { FastBuy } exact />
          <Route component = {NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

App = connect(store => ({profile: store.profile}), {fetchLocation})(App)

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
export default AppWrapper;
