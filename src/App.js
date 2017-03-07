import React, { Component } from 'react'
import { Link } from 'react-router';
import logo from './logo.svg';
import home from './homeImage.jpg';
import './App.css';
import Login from './Login.js';

class App extends Component {
    render() {
        return (
            <div className="main-app">
                <div id="header" className="main-head"> 
                    <ul className="header">
                        <li><img src={logo} className="App-logo" alt="logo" /></li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link to="dashboard">Dashboard</Link></li>
                        <li><Link to="product">Product</Link></li>
                        <li><Link to="login">Login</Link></li>
                        <li><Link to="signUp">SignUp</Link></li>
                        <li><Link to="profile">Profile</Link></li>
                    </ul>
                </div> 
                <div id="content" className="main-content"> 
                    {this.props.children}
                    <div className="imgHome">
                        <img src={home} alt="homeImg"/>
                    </div>
                </div> 
                <div id="footer" className="main-footer"> 
                </div>
            </div>
        );
    }
}

export default App;
