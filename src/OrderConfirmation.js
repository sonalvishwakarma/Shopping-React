import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

class OrderConfirmation extends Component {


  componentWillMount(){
    if(JSON.parse(localStorage.getItem("LoggedUser"))){
        browserHistory.push('/OrderConfirmation')
    }
    else{
      browserHistory.push('/Login')
    }
  }
  render(){
    var orderNumbers = JSON.parse(localStorage.getItem("orderNumber")) 
    return (
      <div className="main-app">
        <Header/>
        <div id="content" className="main-content">
          <div className="container">
            <p>Thanku for your order</p>
            <p className="wColor">Your order number is <b>{orderNumbers}</b></p>
            <p className="wColor">You will recieve an email information shortly</p>
            <a href="/MyOrder" className="wColor">Click here to view your order invoice</a>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderConfirmation;