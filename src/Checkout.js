import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row,Image,Table, Tabs,Tab,Form, FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import home3 from './home3.jpg';

class Checkout extends Component {

	render(){
		return (
			<div className="main-app">
                <Header/> 
                <div id="content" className="main-content"> 
				   	<div className="login">
						  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
						    <Tab eventKey={1} title="Delivery Address">
	                            <Form horizontal className="marginTop50">

								   <FormGroup controlId="formHorizontalEmail">
		 						      <Col componentClass={ControlLabel} sm={2}>
		 						        First Name
		 						      </Col>
		 						      <Col sm={10}>
		 						        <FormControl
		 				                    type="text"
		 				                    placeholder="Enter your first name" bsSize="sm" />
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
		 				                    placeholder="Enter your last name" bsSize="sm" />				                <FormControl.Feedback />
		 						      </Col>
		 						    </FormGroup>

								    <FormGroup controlId="formHorizontalEmail">
								      <Col componentClass={ControlLabel} sm={2}>
								        Email
								      </Col>
								      <Col sm={10}>
								        <FormControl
						                    type="email"
						                    placeholder="Enter your email" bsSize="sm" />
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								     <FormGroup controlId="formHorizontalPassword">
								      <Col componentClass={ControlLabel} sm={2}>
								        Contact No
								      </Col>
								      <Col sm={10}>
								        <FormControl
						                    type="text"
						                    placeholder="Enter your contact number" bsSize="sm" />
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								    <FormGroup controlId="formHorizontalPassword">
								      <Col componentClass={ControlLabel} sm={2}>
								        Address
								      </Col>
								      <Col sm={10}>
								        <FormControl
						                    type="text"
						                    placeholder="Enter your contact address" bsSize="sm" />
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								    <FormGroup controlId="formHorizontalPassword">
								      <Col componentClass={ControlLabel} sm={2}>
								        City
								      </Col>
								      <Col sm={10}>
								        <FormControl
						                    type="text"
						                    placeholder="Enter your city" bsSize="sm" />
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								    <FormGroup controlId="formHorizontalPassword">
								      <Col componentClass={ControlLabel} sm={2}>
								        Zip
								      </Col>
								      <Col sm={10}>
								        <FormControl
						                    type="text"
						                    placeholder="Enter your Zip code" bsSize="sm" />
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								    <FormGroup>
								      	<Col smOffset={11} sm={2}>
					                		<Button type="submit" bsStyle="primary" eventKey={2} >
								          		Continue
								        	</Button>
								      	</Col>
								    </FormGroup>
		  						</Form>
						    </Tab>
						    <Tab eventKey={2} title="Order Summary">
                            	<Table striped bordered condensed hover>
							    <thead>
							      <tr>
							        <th>Product</th>
							        <th>Description</th>
							        <th>Price</th>
							        <th>Quantity</th>
							        <th>Total</th>
							      </tr>
							    </thead>
							    <tbody>
							      <tr>
							        <td className="width25">
							            <Col md={12} className="wColor">
							        		<Col  md={6}>
							        		    <Image src={home3}  alt="imgHome" className="imgViewCart"/>
	                                         </Col>
							        		<Col  md={6}>
										        <h3>Computer</h3>
										    </Col>       
										</Col>        
							        </td>
							        <td className="width25">
							            <Col md={12} className="wColor">
							        		<Col  md={12}>
										        <p>Base CSS class and prefix for the component. UI delay change</p>
										    </Col>       
										</Col>        
							        </td>
							        <td className="width15">
							            <Col md={12} className="wColor">
							        		<Col  md={12}>
										        <p>Price: - $300.20</p>
										    </Col>       
										</Col>        
							        </td>
							        <td className="width15">
							            <Col md={12} className="wColor">
							        		<Col  md={6}>
										        Qty
										    </Col> 
										    <Col md={6}>
										        <FormControl
								                    type="text" value={1} bsSize="sm"/>
								                <FormControl.Feedback />
										    </Col>       
										</Col>        
							        </td>
							        <td className="width15">
							            <Col md={12} className="wColor">
							        		<Col  md={12}>
										        <p>Total: - 300</p>
										    </Col>       
										</Col>       
							        </td>
							      </tr>
							    </tbody>
								</Table>
								<Row className="show-grid" className="wColor">
							      <Col mdOffset={10}>
							           <Col md={6}>
											Grand Total:
									    </Col> 
									    <Col md={6}>
									        <FormControl
							                    type="text" value={300} bsSize="sm"/>
							                <FormControl.Feedback />
									    </Col> 
							         </Col>
							    </Row>
		                        <br></br><br></br><br></br>
		                        <Row className="show-grid" className="wColor">
							      	<Col mdOffset={11}>
											<span>
									          <Button type="submit" bsStyle="primary" >Continue</Button> &nbsp;
									        </span>
							        </Col>
							    </Row>
						    </Tab>
						    <Tab eventKey={3} title="Payment Details" >
						    	<p>Please select how would you like to pay</p>
						    	 <Form horizontal className="marginTop50">

		 						    <FormGroup controlId="formControlsSelect">
		 						      <Col componentClass={ControlLabel} sm={2}>
		 						        Credit Card Type
		 						      </Col>
		 						      <Col sm={10}>
									      <FormControl componentClass="select" placeholder="select">
									        <option value="select">select</option>
									        <option value="other">...</option>
									      </FormControl>
		 						      </Col>
		 						    </FormGroup>
		 
		 						    <FormGroup controlId="formHorizontalPassword">
		 						      <Col componentClass={ControlLabel} sm={2}>
		 						        Card Number
		 						      </Col>
		 						      <Col sm={10}>
		 						        <FormControl
		 				                    type="text"
		 				                    placeholder="Enter your card number" bsSize="sm" />				                <FormControl.Feedback />
		 						      </Col>
		 						    </FormGroup>

								    <FormGroup controlId="formHorizontalEmail">
								      <Col componentClass={ControlLabel} sm={2}>
								        Name on card
								      </Col>
								      <Col sm={10}>
								        <FormControl
						                    type="text"
						                    placeholder="Enter card holder name" bsSize="sm" />
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								     <FormGroup controlId="formHorizontalPassword">
								      <Col componentClass={ControlLabel} sm={2}>
								        Start Date
								      </Col>
								      <Col sm={5}>
								        <FormControl
						                    type="date" bsSize="sm" value="Month"/>
						                <FormControl.Feedback />
								      </Col>
								      <Col sm={5}>
								        <FormControl
						                    type="date" bsSize="sm" value="Year" />
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								    <FormGroup controlId="formHorizontalPassword">
								      <Col componentClass={ControlLabel} sm={2}>
								        Expiry Date
								      </Col>
								      <Col sm={5}>
								        <FormControl
						                    type="date" bsSize="sm" value="Month"/>
						                <FormControl.Feedback />
								      </Col>
								      <Col sm={5}>
								        <FormControl
						                    type="date" bsSize="sm" value="Year"/>
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								    <FormGroup controlId="formHorizontalPassword">
								      <Col componentClass={ControlLabel} sm={2}>
								        Security code
								      </Col>
								      <Col sm={10}>
								        <FormControl
						                    type="text"  bsSize="sm" />
						                <FormControl.Feedback />
								      </Col>
								    </FormGroup>

								    <FormGroup>
								      	<Col smOffset={11} sm={2}>
					                		<Button type="submit" bsStyle="primary" eventKey={2} >
								          		Continue
								        	</Button>
								      	</Col>
								    </FormGroup>
		  						</Form>
						    </Tab>
						    <Tab eventKey={4} title="Confirmation" >
						    	<p>Thanku for your order</p>
						    	<p className="wColor">Your order number is <b>805426</b></p>
						    	<p className="wColor">You will recieve an email information shortly</p>
						    </Tab>
						  </Tabs>
					</div>
				</div> 
            </div>
        );
	}
}

export default Checkout;