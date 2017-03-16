import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, FormControl, Col,Form} from 'react-bootstrap';

var userApi = 'https://api.myjson.com/bins/o4zz3';
var users = [];

class SignUp extends Component{
	constructor(props) {
		super(props);
		this.getData();
		this.state = {
			id : 0,
			fname : '',
			lname : '',
			email : '',
			password : '',
		};


		this.handleSignUp = this.handleSignUp.bind(this);
	}

	handleFNameChange(event) {
		this.setState({fname: event.target.value});
	}
	
	handleLNameChange(event) {
		this.setState({lname: event.target.value});
	}

	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}
	
	handlePwdChange(event) {
		this.setState({password: event.target.value});
	}

	 addID(){
		    this.setState({id: this.state.id++});
		}

	increment(){
		this.setState({
			id: this.state.id + 1
		});
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
	
	handleSignUp() {

		if(this.state.fname !== '' && this.state.lname !== '' && this.state.email !== '' && this.state.Password !== '' )
		{
		
			
			fetch(userApi, {  
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"UserID":  this.state.id,
					"FirstName": this.state.fname,
					"LastName": this.state.lname,
					"EmailID": this.state.email,
					"Password": this.state.password
				})
			}).then(function(res)
			{
				return res.json()
				.then(function(json) {  
					users.push(json);
					localStorage.setItem('users', JSON.stringify(users));

					console.log(users,"post")

					if(json !== '' && JSON.parse(localStorage.getItem("UserID")) !== json.UserID){
						localStorage.setItem('UserID', JSON.stringify(json.UserID));
						alert("Successfully Sign in")
					}	 
				}.bind(this))
			}.bind(this));

			browserHistory.push('/');
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
			First Name
			</Col>
			<Col sm={10}>
			<FormControl
			type="text"
			placeholder="Enter your first name" bsSize="sm" 
			value={this.state.fname} onChange={this.handleFNameChange.bind(this)}/>
			<FormControl.Feedback />
			</Col>
			</FormGroup>
			
			<FormGroup controlId="formHorizontalPassword">
			<Col componentClass={ControlLabel} sm={2}>
			Last Name
			</Col>
			<Col sm={10}>
			<FormControl
			type="text"
			placeholder="Enter your last name" bsSize="sm"
			value={this.state.lname} onChange={this.handleLNameChange.bind(this)}/>				                <FormControl.Feedback />
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