import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, FormControl, Col,Form} from 'react-bootstrap';
var userApi = 'https://api.myjson.com/bins/o4zz3';

var users = [];
class Login extends Component {

	constructor(props) {
		super(props);
		this.getData()
		this.state = {
			email : '',
			password : ''
		};
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}

	handlePwdChange(event) {
		this.setState({email: this.state.email, password: event.target.value});
	}

	getData(){
		fetch(userApi)
		.then( (response) => {
			return response.json()
		})   
		.then( (json) => {
			users.push(json);
		});
	}

	handleLogin() {

		if(this.state.email !== '' && this.state.password !== '' ){
				for (var val of users) {
    				if(this.state.email ===  val.EmailID && this.state.password === val.Password)
    				{
    					localStorage.setItem('LoggedUser', JSON.stringify(val));
    					browserHistory.push('/')
    				}

    				else if(this.state.email === '' && this.state.password === '' ){
    			   		alert("Oops! You are not providing crendentials, please enter email and password");
    			   	}
    			   	else {
    			   		alert("Please enter correct email and password");
    			   	}
    			}
    		}
        }

    	render(){
    		return (
    			<div className="main-app">
    			<Header/> 
    			<div id="content" className="main-content"> 
    			<div className="login">
    			<h2>Login</h2>

    			<Form horizontal>
    			<FormGroup controlId="formHorizontalEmail">
    			<Col componentClass={ControlLabel} sm={2}>
    			Email
    			</Col>
    			<Col sm={10}>
    			<FormControl
    			type="text"
    			placeholder="Enter your email" bsSize="sm" 
    			value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
    			<FormControl.Feedback />
    			</Col>
    			</FormGroup>

    			<FormGroup controlId="formHorizontalPassword">
    			<Col componentClass={ControlLabel} sm={2}>
    			Password
    			</Col>
    			<Col sm={10}>
    			<FormControl
    			type="password"
    			placeholder="Enter your password" bsSize="sm"
    			value={this.state.password} onChange={this.handlePwdChange.bind(this)}/>
    			<FormControl.Feedback />
    			</Col>
    			</FormGroup>

    			<FormGroup>
    			<Col smOffset={2} sm={10}>
    			<Button type="submit" bsStyle="primary" onClick={this.handleLogin}>
    			Login
    			</Button>
    			<Button href="#" bsStyle="link">forget password</Button>
    			</Col>
    			</FormGroup>
    			</Form>
    			</div>
    			</div> 
    			</div>
    	);
    }
}

export default Login;