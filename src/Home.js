import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import logo from './logo.svg';
import addtoCart from './img/addtoCart.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button} from 'react-bootstrap';

var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var mycart;

class Header extends Component {

    handleLogout() {
        localStorage.clear();
        browserHistory.push('/');
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        fetch(shoppingCart)
        .then( (response) => {
            return response.json()
        })   
        .then( (json) => {
            mycart = json
            
            if(mycart !== []){
                var count = mycart.length;
                document.getElementById("count").innerHTML = count;
            }
        });
    }

    render() {
        return (
        <div>
            <div id="header" className="main-head"> 
                <ul className="header">
                    <li><img src={logo} className="App-logo" alt="logo" /></li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li><Link to="products" className="marginRight">Product</Link></li>

                    <li><Link to="viewCart">
                        <Button type="submit" id="count"></Button>
                        <Button type="submit" >
                        <img className="addtoCart" src={addtoCart} alt="addtoCart" /></Button></Link></li>

                    { JSON.parse(localStorage.getItem("LoggedUser")) ? 
                        (<li><Link to="profile">Profile</Link></li>)
                        : (<li><Link to="login">Login</Link></li>)
                    }

                    { JSON.parse(localStorage.getItem("LoggedUser")) ? 
                        (<li><Button type="submit" onClick={this.handleLogout}>Logout</Button></li>)
                    : (<li><Link to="signUp">SignUp</Link></li>)
                    }
                    
                </ul>
            </div> 
        </div>    
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <div id="footer" className="main-footer"> </div>
        );
    }
}

export default Header;
