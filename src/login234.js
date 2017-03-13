{/*import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, FormControl, Col,Form} from 'react-bootstrap';

class Login extends Component {

 	constructor(props) {
   	super(props);
		
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

  	handleLogin() {

	    if(this.state.email !== '' && this.state.password !== '' ){
          console.log(this.state.email)
	    	browserHistory.push('/');
	    	localStorage.setItem('Email', JSON.stringify(this.state.email));
	   		localStorage.setItem('Password', JSON.stringify(this.state.password));

		   	fetch('https://reqres.in/api/login', {
				method: 'post',
				headers: {
				    'Content-Type': 'application/json'
				  },
				body: JSON.stringify({
				    email: this.state.email,
				    password: this.state.password
				})
			})
			.then(function(response) 
				{ 
					return response.json()
					.then(function(json) {  
					this.setState({
						data: json
					});
					if(json !== ''){
						localStorage.setItem('Token', JSON.stringify(json.token));
						console.log(json, "Successfully Log in")    
						alert("Successfully Log in") 
					}
				}.bind(this))
			}.bind(this));

	    }
	    else if(this.state.email === '' && this.state.password === '' ){
	        alert("Oops! You are not providing crendentials, please enter email and password");
	  	}
	  	else {
	        alert("Please enter correct email and password");
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

export default Login;*/}