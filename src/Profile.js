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

  	getIntialData(){
  		var userDetails = JSON.parse(localStorage.getItem("LoggedUser"));
       
        {/* this.state.fname = userDetails.FirstName;
         console.log(this.state.fname)*/}
         document.getElementById("fname").innerHTML = userDetails.FirstName;
         document.getElementById("lname").innerHTML = userDetails.LastName;
         document.getElementById("emailid").innerHTML = userDetails.EmailID;
         document.getElementById("pwd").innerHTML = userDetails.Password;	
  	}

  	handleFirstName(event){
	     this.setState({ fname : event.target.value})
  	}
   
	render(){
		return (
			<div className="main-app">
               	<Header/> 
                <div id="content" className="main-content"> 
				   <div className="login">
						<h2>My Profile</h2>

						<Form horizontal>
                            {/*<span></span>*/}
						    <FormGroup controlId="firstName">
						      <Col componentClass={ControlLabel} sm={2}>
						        First Name  :
						      </Col>
						      <Col sm={10}>
						        <p id="fname"></p>
						        	{/*<FormControl
					                    type="text"  bsSize="sm" ref="inputvalue" defaultValue={this.state.fname || ''}
					                     onChange={this.handleFirstName}/>
					                <FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>

                            <FormGroup controlId="lastName">
						      <Col componentClass={ControlLabel} sm={2}>
						        Last Name  :
						      </Col>
						      <Col sm={10}>
						        <p id="lname"></p>
						        	{/*<FormControl
					                    type="text"  bsSize="sm" ref="inputvalue" defaultValue={this.state.fname || ''}
					                     onChange={this.handleFirstName}/>
					                <FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="email">
						      <Col componentClass={ControlLabel} sm={2}>
						        Email  :
						      </Col>
						      <Col sm={10}>
						      	 <p id="emailid"></p>
						        	{/*<FormControl
					                    type="text"  bsSize="sm" ref="inputvalue" defaultValue={this.state.fname || ''}
					                     onChange={this.handleFirstName}/>
					                <FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>


						    <FormGroup controlId="formHorizontalPassword">
						      <Col componentClass={ControlLabel} sm={2}>
						        Password  :
						      </Col>
						      <Col sm={10}>
						      	<p id="pwd"></p>
						        	{/*<FormControl
					                    type="password"
					                    placeholder="Enter your password" bsSize="sm"
										value={this.props.Password}  />				                
									<FormControl.Feedback />*/}
						      </Col>
						    </FormGroup>

						    {/*<FormGroup>
						      	<Col smOffset={2} sm={10}>
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