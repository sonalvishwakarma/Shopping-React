import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, FormControl, Col,Form} from 'react-bootstrap';

// JSON url of Users
var userApi = 'https://api.myjson.com/bins/o4zz3';

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
			confirmPwd : '',
			users : []
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

	handleConfirmPwdChange(event) {
		this.setState({confirmPwd: event.target.value});
	}

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
	
	// Handle Sign up with users details
	handleSignUp() {

		if(this.state.fname !== '' && this.state.lname !== '' && this.state.email !== '' && this.state.password !== '' )
		{
			if(this.state.password === this.state.confirmPwd){

				// Post user detials with API
				this.state.users.push({
					"UserID":  this.state.users.length + 1,
					"FirstName": this.state.fname,
					"LastName": this.state.lname,
					"EmailID": this.state.email,
					"Password": this.state.password
				})
			  
				fetch(userApi, {  
					method: 'PUT',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(this.state.users)
				}).then(function(res)
				{
					return res.json()
					.then(function(json) {  
						alert("Successfully Sign in")
						browserHistory.push('/Login');
					}.bind(this))
				}.bind(this));
			}
			else if(this.state.password !== this.state.confirmPwd) {
				alert("password and confirm password do not match.");
			}
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
					<div className="container">
					<h2>Sign Up</h2>
						<Form horizontal>

							<FormGroup controlId="fn">
								<Col componentClass={ControlLabel} sm={2}>
									<span className="mand">*</span>First Name
								</Col>
								<Col sm={10}>
									<FormControl
										type="text"
										placeholder="Enter your first name" bsSize="sm"
										value={this.state.fname} onChange={this.handleFNameChange.bind(this)}/>
									<FormControl.Feedback />
								</Col>
							</FormGroup>
						
    						<FormGroup controlId="ln">
    							<Col componentClass={ControlLabel} sm={2}>
    								<span className="mand">*</span>Last Name
    							</Col>	
    							<Col sm={10}>
    								<FormControl
    									type="text"
    									placeholder="Enter your last name" bsSize="sm"
    									value={this.state.lname} onChange={this.handleLNameChange.bind(this)}/>	
    								<FormControl.Feedback />
    							</Col>
    						</FormGroup>

    						<FormGroup controlId="em">
                                <Col componentClass={ControlLabel} sm={2}>
                                    <span className="mand">*</span>Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl
                                        type="email"
                                        placeholder="Enter your email" bsSize="sm" 
                                        value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
                                    <FormControl.Feedback />
                                </Col>      
                            </FormGroup>

    						<FormGroup controlId="pwd">
        						<Col componentClass={ControlLabel} sm={2}>
        						    <span className="mand">*</span>Password
        						</Col>
        						<Col sm={10}>
            						<FormControl
                						type="password"
                						placeholder="Enter your password" bsSize="sm"
                						value={this.state.password} onChange={this.handlePwdChange.bind(this)} />
            						<FormControl.Feedback />
        						</Col>
    						</FormGroup>

    						<FormGroup controlId="cnp">
        						<Col componentClass={ControlLabel} sm={2}>
                                    <span className="mand">*</span>Confirm password
        						</Col>
        						<Col sm={10}>
            						<FormControl
	            						type="password"
	            						placeholder="Enter Confirm your password" bsSize="sm"
	            						value={this.state.confirmPwd} onChange={this.handleConfirmPwdChange.bind(this)} />	
            						<FormControl.Feedback />
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
