import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import App from './App.js';
import Dashboard from './Dashboard.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Profile from './Profile.js';
import Products from './Products.js';
import ProductDetail from './ProductDetail.js';
import ViewCart from './ViewCart.js';
import DeliveryAddress from './DeliveryAddress.js';
import OrderSummary from './OrderSummary.js';
import OrderConfirmation from './OrderConfirmation.js';
import MyOrder from './MyOrder.js';
import NotFound from './NotFound.js';
import './css/index.css';
import {RouterResolver} from 'router-resolver';

	// Route for all components
	ReactDOM.render(
		<Router history={browserHistory} >
		<Route path="/">
		<IndexRoute component={App} />
		<Route path="/Dashboard" component={Dashboard} />                                                                                                
		<Route path="/Login" component={Login} />
		<Route path="/SignUp" component={SignUp} />                                                                                                         
		<Route path="/Profile" component={Profile} />
		<Route path="/Products" component={Products}/>                                                                                                              
		<Route path="/ProductDetail/:id" component={ProductDetail} />
		<Route path="/ViewCart" component={ViewCart} />                                                                                                            
		<Route path="/DeliveryAddress" component={DeliveryAddress} />
		<Route path="/OrderSummary" component={OrderSummary} />                                                                                             
		<Route path="/OrderConfirmation" component={OrderConfirmation} />
		<Route path="/MyOrder" component={MyOrder} />                                                                                                    
		<Route path="*" component={NotFound} />
		</Route> 
		</Router>,
	document.getElementById('root')
);

