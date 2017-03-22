import React, { Component } from 'react';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup,ControlLabel,Col,Form} from 'react-bootstrap';

class Profile extends Component{
	constructor(props) {
   	super(props);
	   this.state = {
	   	    fname:'',
	   	    lname : '',
           	email : '',
         	password : ''
	   }
  	}

  	componentDidMount(){
       this.getIntialData()
  	}
    
    // Getting logged user by localstorage
  	getIntialData(){
  		var userDetails = JSON.parse(localStorage.getItem("LoggedUser"));
         document.getElementById("fname").innerHTML = userDetails.FirstName;
         document.getElementById("lname").innerHTML = userDetails.LastName;
         document.getElementById("emailid").innerHTML = userDetails.EmailID;
         document.getElementById("pwd").innerHTML = userDetails.Password;	
  	}
   
	render(){
		return (
			<div className="main-app">
               	<Header/> 
                <div id="content" className="main-content"> 
				   <div className="container">
						<h2>My Profile</h2>

						<Form horizontal>
                            {/*<span></span>*/}
						    <FormGroup controlId="firstName">
						      <Col componentClass={ControlLabel} md={2}>
						        First Name  :
						      </Col>
						      <Col md={10}>
						        <p id="fname"></p>
						        	{/*<FormControl
					                    type="text"  bsSize="md" ref="inputvalue" defaultValue={this.state.fname || ''}
					                     onChange={this.handleFirstName}/>
					                <FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>

                            <FormGroup controlId="lastName">
						      <Col componentClass={ControlLabel} md={2}>
						        Last Name  :
						      </Col>
						      <Col md={10}>
						        <p id="lname"></p>
						        	{/*<FormControl
					                    type="text"  bsSize="md" ref="inputvalue" defaultValue={this.state.fname || ''}
					                     onChange={this.handleFirstName}/>
					                <FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="email">
						      <Col componentClass={ControlLabel} md={2}>
						        Email  :
						      </Col>
						      <Col md={10}>
						      	 <p id="emailid"></p>
						        	{/*<FormControl
					                    type="text"  bsSize="md" ref="inputvalue" defaultValue={this.state.fname || ''}
					                     onChange={this.handleFirstName}/>
					                <FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>


						    <FormGroup controlId="formHorizontalPassword">
						      <Col componentClass={ControlLabel} md={2}>
						        Password  :
						      </Col>
						      <Col md={10}>
						      	<p id="pwd"></p>
						        	{/*<FormControl
					                    type="password"
					                    placeholder="Enter your password" bsSize="md"
										value={this.props.Password}  />				                
									<FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>

						    {/*<FormGroup>
						      	<Col mdOffset={2} md={10}>
			                		<Button type="submit" bsStyle="primary" >
						          		Edit
						        	</Button>
						        	<Button type="submit" bsStyle="primary" >
						          		Save
						        	</Button>
						      	</Col>
						    </FormGroup>*/}
  						</Form>

					</div>
				</div> 
            </div>
		)
	}
}

export default Profile;