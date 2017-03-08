import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, FormControl, Col,Form} from 'react-bootstrap';

class SignUp extends Component{
	constructor(props) {
   	super(props);
    		this.state = {
    			name : '', 
    			contactn: '',
    			email : '',
         	    pwd : '',
         	    confirmPwd:''
    		};
    	this.handleSignUp = this.handleSignUp.bind(this);
  	}

  	handleNameChange(event) {
    	this.setState({name: event.target.value});
  	}
    
    handleContactNoChange(event) {
    	this.setState({contactn: event.target.value});
  	}

  	handleEmailChange(event) {
    	this.setState({email: event.target.value});
  	}
    
    handlePwdChange(event) {
    	this.setState({pwd: event.target.value});
  	}

  	handleConfirmPwdChange(event) {
    	this.setState({confirmPwd: event.target.value});
  	}
    
  	handleSignUp() {

	    if(this.state.name !== '' && this.state.contactn !== '' &&  this.state.email !== '' && this.state.pwd !== '' && this.state.confirmPwd !== '' && this.state.pwd === this.state.confirmPwd){
	    	browserHistory.push('/App');
	    	localStorage.setItem('User-name', JSON.stringify(this.state.name));
	   		localStorage.setItem('User-contactn', JSON.stringify(this.state.contactn));
	   		localStorage.setItem('User-name', JSON.stringify(this.state.email));
	   		localStorage.setItem('User-pwd', JSON.stringify(this.state.pwd));
	   		localStorage.setItem('User-confirmPwd', JSON.stringify(this.state.confirmPwd));

	   		this.isLogged = true;
	   		localStorage.setItem('islogged', JSON.stringify(this.isLogged));
	    }
	    
	    else if(this.state.pwd !== this.state.confirmPwd){
	  		alert("Password and confrim password dose not match");
	  	}

	    else{
	        alert("Please enter details");
	  	}

	  	
	}

	render(){
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
				   <div className="login">
						<h2>Sign Up</h2>

						<Form horizontal>
						    <FormGroup controlId="formHorizontalEmail">
						      <Col componentClass={ControlLabel} sm={2}>
						        Name
						      </Col>
						      <Col sm={10}>
						        <FormControl
				                    type="text"
				                    placeholder="Enter your full name" bsSize="sm" 
				                    value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
				                <FormControl.Feedback />
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalPassword">
						      <Col componentClass={ControlLabel} sm={2}>
						        Contact No
						      </Col>
						      <Col sm={10}>
						        <FormControl
				                    type="number"
				                    placeholder="Enter your contact number" bsSize="sm"
									value={this.state.contactn} onChange={this.handleContactNoChange.bind(this)}/>				                <FormControl.Feedback />
						      </Col>
						    </FormGroup>

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
									value={this.state.pwd} onChange={this.handlePwdChange.bind(this)} />				                <FormControl.Feedback />
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalEmail">
						      <Col componentClass={ControlLabel} sm={2}>
						        Confirm Password
						      </Col>
						      <Col sm={10}>
						        <FormControl
				                    type="password"
				                    placeholder="Enter your confirm password" bsSize="sm" 
									value={this.state.confirmPwd} onChange={this.handleConfirmPwdChange.bind(this)}/>				                <FormControl.Feedback />
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
                <div id="footer" className="main-footer"> 
                </div>
            </div>
		)
	}
}

export default SignUp;