import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import logo from './logo.svg';
import addtoCart from './img/addtoCart.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button} from 'react-bootstrap';

class Header extends Component {

    handleLogout() {
        localStorage.clear();
        browserHistory.push('/');
    }

    render() {
        return (
        <div className="main-app">
            <div id="header" className="main-head"> 
                <ul className="header">
                    <li><img src={logo} className="App-logo" alt="logo" /></li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li><Link to="product" className="marginRight">Product</Link></li>
                   
                    { JSON.parse(localStorage.getItem("Token")) !== '' ? 
                        (<li><Link to="profile">Profile</Link></li>)
                        :(<li><Link to="signUp">SignUp</Link></li>)
                    }
                    <li><Button type="submit">Cart<img className="addtoCart" src={addtoCart} alt="addtoCart"/></Button></li>

                    { JSON.parse(localStorage.getItem("Token")) !== '' ? 
                        (<li><Button type="submit" onClick={this.handleLogout}>Logout</Button></li>)
                        :(<li><Link to="login">Login</Link></li>)
                    }
                </ul>
            </div> 
            <Footer/>
        </div>    
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <div id="footer" className="main-footer"> 
            </div>
        );
    }
}

export default Header;
