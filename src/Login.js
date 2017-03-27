import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, FormGroup, ControlLabel, FormControl, Col, Form} from 'react-bootstrap';

// JSON url of Users
var userApi = 'https://api.myjson.com/bins/o4zz3';

class Login extends Component {

	constructor(props) {
		super(props);
		this.getData()
		this.state = {
			email : '',
			password : '',
      users : [],
		};
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}

	handlePwdChange(event) {
		this.setState({password: event.target.value});
	}

  // getting users for login authentication
	getData(){
		fetch(userApi)
		.then( (response) => {
			return response.json()
		})   
		.then( (json) => {
      this.setState({
        users : json
      })
		});
	}
    
  // Handle login with Email and Password
	handleLogin() {

		if(this.state.email !== '' && this.state.password !== '' )
    {
      for (var val of this.state.users) {

				if(this.state.email === val.EmailID && this.state.password === val.Password)
				{
					localStorage.setItem('LoggedUser', JSON.stringify(val));
            alert("Successfully logged in");
            browserHistory.push('/Dashboard')
				}
			  {/*else
        {
		   		alert("Oops! You are not providing valid crendentials");
		   	}*/}
		  } 
  	}
    else if(this.state.email === '' && this.state.password === '' ){
      alert("Oops! You are not providing crendentials, please enter email and password");
    }
  }

	render(){
    return (
      <div className="main-app">
        <Header/> 
        <div id="content" className="main-content"> 
          <div className="container">
          <h2>Login</h2>

          <Form horizontal>
            <FormGroup controlId="emaila">
              <Col componentClass={ControlLabel} md={2}>
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

            <FormGroup controlId="pwda">
              <Col componentClass={ControlLabel} md={2}>
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
              <Col mdOffset={2} md={10}>
                <Button type="submit" bsStyle="primary" onClick={this.handleLogin}>Login</Button>
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