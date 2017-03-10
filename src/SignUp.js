import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, FormControl, Col,Form} from 'react-bootstrap';

class SignUp extends Component{
	constructor(props) {
   	super(props);
    		this.state = {
    			email : '',
         	    password : '',
    		};
    	this.handleSignUp = this.handleSignUp.bind(this);
  	}

  	handleEmailChange(event) {
    	this.setState({email: event.target.value});
  	}
    
    handlePwdChange(event) {
    	this.setState({password: event.target.value});
  	}
    
  	handleSignUp() {

	    if(this.state.email !== '' && this.state.Password !== '' ){
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

					if(json !== '' && JSON.parse(localStorage.getItem("Token")) !== json.token){
					    localStorage.setItem('Token', JSON.stringify(json.token));
						console.log(json, "Successfully Sign in")   
						alert("Successfully Sign in")
					}	 
				}.bind(this))
			}.bind(this));

	    }

	    else{
	        alert("Please enter details");
	  	}
	}

	render(){
		return (
			<div className="main-app">
               	<Header/> 
                <div id="content" className="main-content"> 
				   <div className="login">
						<h2>Sign Up</h2>

						<Form horizontal>

						    <FormGroup controlId="formHorizontalEmail">
						      <Col componentClass={ControlLabel} sm={2}>
						        Email
						      </Col>
						      <Col sm={10}>
						        <FormControl
				                    type="email"
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
									value={this.state.Password} onChange={this.handlePwdChange.bind(this)} />				                <FormControl.Feedback />
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      	<Col smOffset={2} sm={10}>
			                		<Button type="submit" bsStyle="primary" onClick={this.handleSignUp}>
						          		Sign in
						        	</Button>
						      	</Col>
						    </FormGroup>
  						</Form>

					</div>
				</div> 
            </div>
		)
	}
}

export default SignUp;