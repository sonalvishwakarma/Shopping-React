{/*import React, { Component } from 'react';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row,Image,Table, Tabs,Tab,Form, FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
var userApi = 'https://api.myjson.com/bins/o4zz3';
var UserDetails ={};

var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var allCartData = [];

class Checkout extends Component {

	constructor(props){
		super(props);
        this.getData();

		this.state = {
			users : [{
			UserID : '',
			FirstName: '',
			LastName: '',
			EmailID:'' ,
			Password :'',
			contactno : '',
			address : '',
			city : '',
			zip :''}]
		}
      this.handleDeliveryAdd = this.handleDeliveryAdd.bind(this);
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

	handleDeliveryAdd(){
		if(this.state.contactno !== '' && this.state.address !== '' && this.state.city !== '' && this.state.zip !== '' )
		{   
			var UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))

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

					if(json !== '' && JSON.parse(localStorage.getItem("LoggedUser")) ){
						alert("Your delivery address is saved please continue with order summary")
					}	 
				}.bind(this))
			}.bind(this));
		}

		else{
			alert("Please enter required details");
		}
	}

	orderSave(){
		var uniqueID = new Date().getTime();
		localStorage.setItem('orderNumber', JSON.stringify(uniqueID));
		alert("your order details is saved check your Confirmation")
	}

	render(){
		var UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))
		var orderNumbers = JSON.parse(localStorage.getItem("orderNumber")) 
		return (
		<div className="main-app">
                <Header/> 
                <div id="content" className="main-content"> 
				   	<div className="login">
						  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
						    <Tab eventKey={1} title="Delivery Address">
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
								        Contact No
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
								        Address
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
								        City
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
								        Zip
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
					                		<Button type="submit" bsStyle="primary" onClick={this.handleDeliveryAdd} >
								          		Save and continue
								        	</Button>
								      	</Col>
								    </FormGroup>
		  						</Form>
						    </Tab>

						    <Tab eventKey={2} title="Order Summary">
						        <ViewCart/>
						        <FormGroup>
							      	<Col mdOffset={11} md={2}>
				                		<Button type="submit" bsStyle="primary" onClick={this.orderSave.bind(this)}>
							          		Save and continue
							        	</Button>
							      	</Col>
								</FormGroup>
						    </Tab>

						    <Tab eventKey={4} title="Confirmation" >
						    	<p>Thanku for your order</p>
						    	<p className="wColor">Your order number is <b>{orderNumbers}</b></p>
						    	<p className="wColor">You will recieve an email information shortly</p>
                                <a href="/MyOrder" className="wColor">Click here to view your order invoice</a>
						    </Tab>
						</Tabs>
					</div>
				</div> 
            </div>
        );
	}
}

export class ViewCart extends Component {

	constructor(props){
		super(props);
        this.state = {
            cart : [],
            grandTotal : 0
        }
	}

    componentDidMount(){
        this.getShppingCart();
    }

    getShppingCart(){
        fetch(shoppingCart)
        .then( (response) => {
            return response.json()
        })   
        .then(function(json){
            allCartData = json;
            var UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))
            var userID =  UserDetails.UserID;
            
            var usersCart = json.filter(function(pro){
                return pro.UserId === userID;
            })

            var total = 0;
            usersCart.map((cart) => {
                total = total + parseInt(cart.Price);
            })

            this.setState({
              cart: usersCart,
              grandTotal : total
            });
        }.bind(this));
    }

	render(){
        const cardItems = this.state.cart.map((number) =>
            <tr key={number.CartId}>
                <td className="width25">
                    <Col md={12} className="wColor">
                        <Col md={6}>
                            <Image src={number.Image}  alt="imgHome" className="imgViewCart"/>
                         </Col>
                        <Col  md={6}>
                            <h5>{number.ProductName}</h5>
                        </Col>       
                    </Col>        
                </td>
                <td className="width25">
                    <Col md={12} className="wColor">
                        <Col  md={12}>
                            <p>{number.Description}</p>
                        </Col>       
                    </Col>        
                </td>
                <td className="width15">
                    <Col md={12} className="wColor">
                        <Col  md={12}>
                            <p>Price: - {number.Price}</p>
                        </Col>       
                    </Col>        
                </td>
                <td className="width15">
                    <Col md={12} className="wColor">
                        <Col md={6}>
                            Qty
                        </Col> 
                        <Col md={6}>
                            <FormControl disabled
                                type="text" defaultValue={number.Quantity} bsSize="sm"/>
                            <FormControl.Feedback />
                        </Col>      
                    </Col>        
                </td>
                <td className="width15">
                    <Col md={12} className="wColor">
                        <Col  md={12}>
                            <p>Total: - {number.Quantity * number.Price}</p>
                        </Col>       
                    </Col>       
                </td>
            </tr>
        );    
        return (
            <div className="main-app">
                <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="5">My cart</th>
                        </tr>
                    </thead>
                        <tbody>
                            {cardItems}
                        </tbody> 
                </Table>      
                    
                <Row className="show-grid wColor">
                  <Col mdOffset={10}>
                       <Col md={6}>
                            Grand Total:
                        </Col> 
                        <Col md={6}>
                            <FormControl disabled
                                type="text" value={this.state.grandTotal} bsSize="sm"/>
                            <FormControl.Feedback />
                        </Col> 
                     </Col>
                </Row>
            </div>
        );
	}
}

export default Checkout;*/}