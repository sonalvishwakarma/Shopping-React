import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col,Form, FormGroup,FormControl,ControlLabel} from 'react-bootstrap';

//JSON url of users
var userApi = 'https://api.myjson.com/bins/o4zz3';
var UserDetails ={};

class DeliveryAddress extends Component {

	constructor(props){
		super(props);

		this.getData();

		this.state = {
			users : [
			{UserID : '',
			FirstName: '',
			LastName: '',
			EmailID:'' ,
			Password :'',
			contactno : '',
			address : '',
			city : '',
			zip :''}
			]
		}
		this.handleDeliveryAdd = this.handleDeliveryAdd.bind(this);
	}

	componentWillMount(){
	    if(JSON.parse(localStorage.getItem("LoggedUser"))){
	        browserHistory.push('/DeliveryAddress')
	    }
	    else{
	      	browserHistory.push('/Login')
	    }
	}

	handleContactNo(event) {
		this.setState({contactno: event.target.value});
	}
	
	handleAddress(event) {
		this.setState({address: event.target.value});
	}

	handleCity(event) {
		this.setState({city: event.target.value});
	}
	
	handleZip(event) {
		this.setState({zip: event.target.value});
	}

    // Getting Users for handle delivery address
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

    // Handle delivery address
    handleDeliveryAdd(){
    	if(this.state.contactno !== '' && this.state.address !== '' && this.state.city !== '' && this.state.zip !== '' )
    	{   
    		UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))

    		this.state.users  = ([{
    			"UserID":  UserDetails.UserID,
    			"FirstName": UserDetails.FirstName,
    			"LastName": UserDetails.LastName,
    			"EmailID": UserDetails.EmailID,
    			"Password": UserDetails.Password,
    			"ContactNo": this.state.contactno,
    			"Address1": this.state.address,
    			"City": this.state.city,
    			"Zip": this.state.zip
    		}])

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
    				localStorage.setItem('LoggedUser', JSON.stringify(this.state.users[0]));
    				alert("Your delivery address is saved please continue with order summary")
    			{/*browserHistory.push('/OrderSummary');*/}
    		}.bind(this))
    		}.bind(this));
    	}

    	else{
    		alert("Please enter required details");
    	}
    }

    render(){
    	UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))
    	return (
				<div className="main-app">
				  <Header/>
				  <div id="content" className="main-content">
				    <div className="container">
				      <Form horizontal className="marginTop50">
				        <FormGroup controlId="fn">
				          <Col componentClass={ControlLabel} md={2}>
				          	First Name
				          </Col>
				          <Col md={10}>
				          <FormControl readOnly
				            type="text" defaultValue={UserDetails.FirstName}
				            placeholder="Enter your first name" bsSize="sm" />
				          <FormControl.Feedback />
				          </Col>
				        </FormGroup>
				        <FormGroup controlId="ln">
				          <Col componentClass={ControlLabel} md={2}>
				          	Last Name
				          </Col>
				          <Col md={10}>
				          <FormControl readOnly
				            type="text" defaultValue={UserDetails.LastName}
				            placeholder="Enter your last name" bsSize="sm" />
				          <FormControl.Feedback />
				          </Col>
				        </FormGroup>
				        <FormGroup controlId="em">
				          <Col componentClass={ControlLabel} md={2}>
				         	 Email
				          </Col>
				          <Col md={10}>
				          <FormControl readOnly
				            type="email" defaultValue={UserDetails.EmailID}
				            placeholder="Enter your email" bsSize="sm" />
				          <FormControl.Feedback />
				          </Col>
				        </FormGroup>
				        <FormGroup controlId="cn">
				          <Col componentClass={ControlLabel} md={2}>
				          	<span className="mand">*</span>Contact No
				          </Col>
				          <Col md={10}>
				          <FormControl
					          type="Number" value={this.state.contactno || UserDetails.ContactNo} onChange={this.handleContactNo.bind(this)}
					          placeholder="Enter your contact number" bsSize="sm" />
				          <FormControl.Feedback />
				          </Col>
				        </FormGroup>
				        <FormGroup controlId="add">
				          <Col componentClass={ControlLabel} md={2}>
				          	<span className="mand">*</span>Address
				          </Col>
				          <Col md={10}>
				          <FormControl
					          type="text" value={this.state.address || UserDetails.Address1} onChange={this.handleAddress.bind(this)}
					          placeholder="Enter your contact address" bsSize="sm" />
				          <FormControl.Feedback />
				          </Col>
				        </FormGroup>
				        <FormGroup controlId="city">
				          <Col componentClass={ControlLabel} md={2}>
				          	<span className="mand">*</span>City
				          </Col>
				          <Col md={10}>
				          <FormControl
					          type="text" value={this.state.city || UserDetails.City} onChange={this.handleCity.bind(this)}
					          placeholder="Enter your city" bsSize="sm" />
				          <FormControl.Feedback />
				          </Col>
				        </FormGroup>
				        <FormGroup controlId="zip">
				          <Col componentClass={ControlLabel} md={2}>
				          	<span className="mand">*</span>Zip
				          </Col>
				          <Col md={10}>
				          <FormControl
					          type="Number" value={this.state.zip || UserDetails.Zip} onChange={this.handleZip.bind(this)}
					          placeholder="Enter your Zip code" bsSize="sm" />
				          <FormControl.Feedback />
				          </Col>
				        </FormGroup>
				        <FormGroup>
				          <Col mdOffset={10} md={2}>
					          <Button type="submit" bsStyle="primary" href="/OrderSummary" onClick={this.handleDeliveryAdd} >
					          	Save and continue
					          </Button>
				          </Col>
				        </FormGroup>
				      </Form>
				    </div>
				  </div>
				</div>
    		);
    	}
    }


    export default DeliveryAddress;