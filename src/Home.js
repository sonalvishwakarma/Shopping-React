import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import logo from './logo.svg';
import addtoCart from './img/addtoCart.png';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';

// JSON url of shoppingCart
var shoppingCart = 'https://api.myjson.com/bins/he9jr';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      mycart : []
    }
  }

  componentDidMount(){
    this.getData();
  }

  // handle logout auth
  handleLogout() {
    localStorage.clear();
    browserHistory.push('/');
  }

  // getting shoppingCart data for Basket-cart count
  getData(){
    fetch(shoppingCart)
    .then( (response) => {
      return response.json()
    })   
    .then( (json) => {
      this.state.mycart = json
      var count = this.state.mycart.length;
      if(count >=  0){
        localStorage.setItem('count', JSON.stringify(count));
        document.getElementById("count").innerHTML = JSON.parse(localStorage.getItem("count"));
      }
    });
  }

  render() 
  {
    return (
      <div>
        <div id="header" className="main-head">
          <ul className="header">
            <li><img src={logo} className="App-logo" alt="logo" /></li>
            <li>
              <Link to="/">Home</Link>
            </li>
            { 
              JSON.parse(localStorage.getItem("LoggedUser")) ? 
              (
              <li>
                <Link to="dashboard">Dashboard</Link>
              </li>
              )
              : null 
            }
            <li>
              <Link to="products" className="marginRight">Product</Link>
            </li>
            { 
              JSON.parse(localStorage.getItem("LoggedUser")) ? 
              (
              <li>
                <Link to="viewCart">
                <Button type="submit" id="count"></Button><Button type="submit">
                <img className="addtoCart" src={addtoCart} alt="addtoCart"/></Button></Link>
              </li>
              )
              : null
            }
            { 
              JSON.parse(localStorage.getItem("LoggedUser")) ? 
              (
              <li>
                <Link to="profile">Profile</Link>
              </li>
              )
              : (
              <li>
                <Link to="login">Login</Link>
              </li>
              )
            }
            { 
              JSON.parse(localStorage.getItem("LoggedUser")) ? 
              (
              <li><Button type="submit" onClick={this.handleLogout}>Logout</Button></li>
              )
              : (
              <li>
                <Link to="signUp">SignUp</Link>
              </li>
              )
            }
          </ul>
        </div>
      </div>   
    );
  }
}

export class Footer extends Component {
  render() {
    return 
    (
      <div id="footer" className="main-footer"></div>
    );
  }
}

export default Header;
