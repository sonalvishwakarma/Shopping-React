import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup,ControlLabel, Col,Form} from 'react-bootstrap';

class Profile extends Component{
	constructor(props) {
   	super(props);
	   this.state = {
           	email : '',
         	password : '',
	   }
  	}

  	componentDidMount(){
       this.getIntialData()
  	}

  	getIntialData(){
  		document.getElementById("name").innerHTML = JSON.parse(localStorage.getItem("Email"));
  		document.getElementById("pwd").innerHTML = JSON.parse(localStorage.getItem("Password"));
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
						        Email  :
						      </Col>
						      <Col sm={10}>
						        <p id="name" value={this.props.value}></p>
						        {/*<FormControl
				                    type="text"
				                    placeholder="Enter your UserName" id="name" bsSize="sm" 
				                    value={this.props.value}/>
				                <FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalPassword">
						      <Col componentClass={ControlLabel} sm={2}>
						        Password  :
						      </Col>
						      <Col sm={10}>
						        <p id="pwd" value={this.props.value}></p>
						        {/*<FormControl
				                    type="password"
				                    placeholder="Enter your password" bsSize="sm"
									value={this.props.Password}  />				                
									<FormControl.Feedback />*/}
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