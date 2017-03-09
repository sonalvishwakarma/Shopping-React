import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, FormControl, Col,Form} from 'react-bootstrap';
import user from './user.json';

class Login extends Component {

 	constructor(props) {
   	super(props);
    		this.state = {
    			name : '',
         	    pwd : ''
    		};
    	this.handleLogin = this.handleLogin.bind(this);

    	console.log(user,"++++++")

    	for(var i = 0; i < user.length; i++) {
		    var obj = user[i];

		    console.log("Name: " + obj.name);
		}
  	}

  	handleEmailChange(event) {
    	this.setState({name: event.target.value});
  	}
    
    handlePwdChange(event) {
    	this.setState({pwd: event.target.value});
  	}

  	handleLogin() {

	    if(this.state.name === 'sonal.v@gmail.com' && this.state.pwd === '12345' ){
	    	browserHistory.push('/');
	    	localStorage.setItem('auth-name', JSON.stringify(this.state.name));
	   		localStorage.setItem('auth-Pwd', JSON.stringify(this.state.pwd));
	   		this.isLogged = true;
	   		localStorage.setItem('islogged', JSON.stringify(this.isLogged));

	    }
	    else if(this.state.name === '' && this.state.pwd === '' ){
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
				                    value={this.state.name} onChange={this.handleEmailChange.bind(this)}/>
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
				                    value={this.state.pwd} onChange={this.handlePwdChange.bind(this)}/>
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