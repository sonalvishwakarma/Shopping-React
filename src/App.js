import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import logo from './logo.svg';
import home from './homeImage.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button} from 'react-bootstrap';

class App extends Component {

    getIntial(){
        document.getElementById('name').innerHTML = JSON.parse(localStorage.getItem("auth-name"));
    }

    handleLogout() {
        localStorage.clear();
        browserHistory.push('/');
    }

    componentDidMount() {
        this.getIntial();
    };

    render() {
        return (
           <div className="main-app">
                <div id="header" className="main-head"> 
                    <ul className="header">
                        <li><img src={logo} className="App-logo" alt="logo" /></li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link to="dashboard">Dashboard</Link></li>
                        <li><Link to="product" className="marginRight">Product</Link></li>
                       
                        { JSON.parse(localStorage.getItem("islogged")) == true ? 
                            (<li><Link to="profile">Profile</Link></li>)
                            :(<li><Link to="signUp">SignUp</Link></li>)
                        }
                         { JSON.parse(localStorage.getItem("islogged")) == true ? 
                            (<li><Button type="submit" onClick={this.handleLogout}>Logout</Button></li>)
                            :(<li><Link to="login">Login</Link></li> )
                        }
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
