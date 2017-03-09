import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, FormControl, Col,Form} from 'react-bootstrap';

class Profile extends Component{
	constructor(props) {
   	super(props);
		this.state = {
			name : '', 
			contactn: '',
			email : '',
     	    pwd : '',
     	    confirmPwd:''
		};
  	}
   
	render(){
		return (
			<div className="main-app">
               	<Header/> 
                <div id="content" className="main-content"> 
				   <div className="login">
						<h2>My Profile</h2>

						<Form horizontal>
						    <FormGroup controlId="formHorizontalEmail">
						      <Col componentClass={ControlLabel} sm={2}>
						        Name
						      </Col>
						      <Col sm={10}>
						        <FormControl
				                    type="text"
				                    placeholder="Enter your full name" bsSize="sm" 
				                    value={this.state.name}/>
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
									value={this.state.contactn}/>				                
									<FormControl.Feedback />
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
				                    value={this.state.email}/>
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
									value={this.state.pwd}  />				                
									<FormControl.Feedback />
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
									value={this.state.confirmPwd} />				                
									<FormControl.Feedback />
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      	<Col smOffset={2} sm={10}>
			                		<Button type="submit" bsStyle="primary" >
						          		Edit
						        	</Button>
						        	<Button type="submit" bsStyle="primary" >
						          		Save
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

export default Profile;